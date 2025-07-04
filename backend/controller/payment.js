import AppError from "../config/error.js";
import { Cards } from "../model/creditCard.js";
import { User } from "../model/user.js";
import { Package } from "../model/package.js";
import { Stats } from "../model/stats.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import Stripe from "stripe";

export const buyPackage = asyncWrapper(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const userId = req.user._id;

  const cardId = req.body?.cardId;

  let customerId;
  let paymentMethodId;

  if (cardId) {
    const card = await Cards.findById(cardId);

    if (!card) {
      return next(new AppError("No cards found!", 404));
    }

    const stats = await Stats.findOne({ user: userId });

    customerId = stats.customerId;
    paymentMethodId = card.paymentMethodId;
  }

  const paymentIntents = await stripe.paymentIntents.create({
    currency: "usd",
    amount: 20 * 100,
    automatic_payment_methods: {
      enabled: true,
    },
    ...(customerId &&
      paymentMethodId && {
        payment_method: paymentMethodId,
        customer: customerId,
        off_session: true,
        confirm: true,
      }),
  });

  const resObject = {};

  if (cardId) {
    resObject.message = "Your package purchase was successfull!";
  } else {
    resObject.client_secret = paymentIntents.client_secret;
  }

  res.status(200).json({
    success: true,
    ...resObject,
  });
});

export const purchaseSuccess = asyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const pricing = await Package.findOne({ type: "Premium" });

  const limits = {};

  for (const feature of pricing.features) {
    if (feature.key === "dailyLimit") {
      limits.dailyLimit = feature.value;
    }

    if (feature.key === "saveLimit") {
      limits.saveLimit = feature.value;
    }

    if (feature.key === "totalContentLimit") {
      limits.totalContentLimit = feature.value;
    }
  }

  const stats = await Stats.findOneAndUpdate(
    { user: userId },
    {
      package: pricing._id,
      packageType: "Premium",
      limits,
      purchasedAt: new Date(),
      renewedAt: new Date(),
    },
    {
      new: true,
    }
  )
    .select("package renewedAt")
    .populate("package");

  res.status(200).json({
    success: true,
    message: "Package purchase was successfull",
    stats,
  });
});

export const cancelPackage = asyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const pricing = await Package.findOne({ type: "Free" });

  const limits = {};

  for (const feature of pricing.features) {
    if (feature.key === "dailyLimit") {
      limits.dailyLimit = feature.value;
    }

    if (feature.key === "saveLimit") {
      limits.saveLimit = feature.value;
    }

    if (feature.key === "totalContentLimit") {
      limits.totalContentLimit = feature.value;
    }
  }

  const stats = await Stats.findOneAndUpdate(
    { user: userId },
    {
      package: pricing._id,
      packageType: "Free",
      limits,
    },
    {
      new: true,
    }
  )
    .select("package renewedAt")
    .populate("package");

  res.status(200).json({
    success: true,
    message: "Subscription canceled successfully!",
    stats,
  });
});

export const setupIntent = asyncWrapper(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const userId = req.user._id;

  const stats = await Stats.findOne({ user: userId });

  let customerId = stats.customerId;

  if (!customerId) {
    const customer = await stripe.customers.create({
      metadata: { userId: userId?.toString() },
      name: req.user.fullName,
      email: req.user.email,
    });
    stats.customerId = customer.id;
    customerId = customer.id;
    await stats.save();
  }

  const intents = await stripe.setupIntents.create({
    customer: customerId,
    usage: "off_session",
    payment_method_types: ["card"],
  });

  res.status(201).json({
    success: true,
    client_secret: intents.client_secret,
  });
});

export const savePaymentMethod = asyncWrapper(async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const userId = req.user._id;

  const { paymentMethodId } = req.body;

  const stats = await Stats.findOne({ user: userId });

  const savedCard = await stripe.paymentMethods.attach(paymentMethodId, {
    customer: stats.customerId,
  });

  const data = savedCard.card;

  const cardType = data.brand || "visa";
  const lastFourNumber = data.last4;
  const exp_month = data.exp_month;
  const exp_year = data.exp_year;

  const card = await Cards.create({
    cardType,
    lastFourNumber,
    exp_month,
    exp_year,
    paymentMethodId,
    user: userId,
  });

  await User.findByIdAndUpdate(userId, {
    $addToSet: {
      creditCard: card._id,
    },
  });

  res.status(201).json({
    success: true,
    message: "Card added successfully!",
    card,
  });
});

export const deleteCard = asyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const { cardId, paymentMethodId } = req.body;

  const stripePromise = stripe.paymentMethods.detach(paymentMethodId);

  const cardsPromise = Cards.findByIdAndDelete(cardId);

  const userPromise = User.findByIdAndUpdate(userId, {
    $pull: {
      creditCard: cardId,
    },
  });

  await Promise.all([stripePromise, cardsPromise, userPromise]);

  res.status(200).json({
    success: true,
    message: "Card deleted successfully",
  });
});
