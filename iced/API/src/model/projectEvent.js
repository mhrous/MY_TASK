import mongoose from "mongoose";

const projectEventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["p", "e"]
    },
    name: {
      type: String,
      required: true
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "college",
      required: true
    },

    description: {
      type: String
    },
    video: {
      type: String
    },
    image: {
      type: String
    },
    all_images_file: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const ProjectEvent = mongoose.model("projectevent", projectEventSchema);
