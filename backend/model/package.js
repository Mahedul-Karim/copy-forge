import { model, Schema } from "mongoose";

const packageSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["Free", "Premium"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    chargeBasis: {
      type: String,
      enum: ["Monthly", "Yearly"],
    },
    features: [
      {
        name: {
          type: String,
        },
        key: {
          type: String,
        },
        value: {
          type: Schema.Types.Mixed,
        
        },
        available: {
          type: Boolean,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Package =  model("Package", packageSchema);
