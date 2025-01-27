import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: [2, "Name is too short"],
  },

  slug: {
    type: String,
    lowercase: true,
  },

  image: {
    type: String,
    required: true,
  },
});

export const categoryModel = model("category", categorySchema);
