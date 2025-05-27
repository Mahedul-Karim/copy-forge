import { model, Schema } from "mongoose";

const contentSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    keywords: [
      {
        type: String,
      },
    ],
    language: {
      type: String,
    },
    writingStyle: {
      type: String,
    },
    document: {
      type: String,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

export const Content = model("Content", contentSchema);
