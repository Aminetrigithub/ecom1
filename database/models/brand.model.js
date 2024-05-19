import { Schema, model } from "mongoose";

const brandSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  slug: {
    type: String,
    lowercase: true,
  },

  logo: {
    type: String,
  },

  images: {
    type: [String],
  },

  category: {
    type: Schema.ObjectId,
    ref: "subCategory",
    required: true,
  },

  subCategory: {
    type: Schema.ObjectId,
    ref: "subCategory",
    required: true,

  },

  brand: {
    type: Schema.ObjectId,
    ref: "brand",
    required: true,

  },



});

export const brandModel = model("brand", brandSchema);
