import { model, Schema } from "mongoose";

const cardSchema = new Schema(
  {
    cardType: {
      type: String,
      enum: ["Visa", "Master"],
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    cardExpiryDate: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);

export const Cards = model("Cards", cardSchema);
