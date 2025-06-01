import AppError from "../config/error.js";
import { Cards } from "../model/creditCard.js";
import { User } from "../model/user.js";
import { Stats } from "../model/stats.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import Stripe from "stripe";

export const buyPackage = asyncWrapper(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const userId = req.user._id;

  const { amount, cardId } = req.body;

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
    amount: amount * 100,
    automatic_payment_methods: {
      enabled: true,
    },
    ...(cardId && {
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
  console.log("Payment was successfull!");
  res.send("Hello World");
});

export const setupIntent = asyncWrapper(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const userId = req.user._id;

  const stats = await Stats.findOne({ user: userId });

  let customerId = stats.customerId;

  if (!customerId) {
    const customer = await stripe.customers.create({
      metadata: { userId: userId?.toString() },
      name: req.user.name,
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
