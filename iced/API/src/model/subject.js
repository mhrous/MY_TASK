import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "college",
      required: true
    },
    semester: {
      type: String,
      enum: ["1", "2"],
      required: true
    },
    year: {
      type: String,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
      required: true
    },
    description: {
      type: String
    },
    video: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const Subject = mongoose.model("subject", subjectSchema);
