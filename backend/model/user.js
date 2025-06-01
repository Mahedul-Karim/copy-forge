import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "Stats",
    },
    phoneNo: {
      type: String,
    },
    country: {
      type: String,
    },
    allowMarketingEmail: {
      type: Boolean,
      default: false,
    },
    autoBilling: {
      type: Boolean,
      default: false,
    },
    autoBillingCard: {
      type: Schema.Types.ObjectId,
      ref: "Cards",
    },
    creditCard: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cards",
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
