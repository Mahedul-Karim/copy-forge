import { model, Schema } from "mongoose";

const cardSchema = new Schema(
  {
    cardType: {
      type: String,
      required: true,
    },
    lastFourNumber: {
      type: String,
      required: true,
    },
    exp_month: {
      type: Number,
    },
    exp_year:{
      type:Number
    },
    paymentMethodId: {
      type: String,
    },
    user:{
      type:Schema.Types.ObjectId,
      ref:'User'
    }
  },

  {
    timestamps: true,
  }
);

export const Cards = model("Cards", cardSchema);
