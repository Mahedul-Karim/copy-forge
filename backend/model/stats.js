import { model, Schema } from "mongoose";

const statsSchema = new Schema(
  {
    packageType: {
      type: String,
      enum: ["Free", "Premium"],
      required:true
    },
    package: {
      type: Schema.Types.ObjectId,
      ref: "Package",
      required:true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required:true
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
