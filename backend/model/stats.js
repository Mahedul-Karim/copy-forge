import { model, Schema } from "mongoose";

const statsSchema = new Schema(
  {
    packageType: {
      type: String,
      enum: ["Free", "Premium"],
    },
    package: {
      type: Schema.Types.ObjectId,
      ref: "Package",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    usage: {
      dailyLimitUsed: { type: Number, default: 0 },
      saveLimitUsed: { type: Number, default: 0 },
      totalContentUsed: { type: Number, default: 0 },
    },
    limits: {
      dailyLimit: Number,
      saveLimit: Number,
      totalContentLimit: Number,
    },
    createdContents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Content",
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Stats = model("Stats", statsSchema);
