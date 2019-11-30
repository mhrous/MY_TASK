import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    university: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "university"
    },
    description: {
      type: String,
      required: true
    },
    years: Number
  },
  {
    timestamps: true
  }
);

export const College = mongoose.model("college", collegeSchema);
