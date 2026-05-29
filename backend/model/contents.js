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
    outputs: {
      blog: String,

      seo: {
        title: String,
        description: String,
      },

      linkedin: String,
      twitter: [String],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  },
);

export const Content = model("Content", contentSchema);
