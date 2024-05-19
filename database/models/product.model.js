import { Schema, model } from "mongoose";

const brandSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  slug: {
    type: String,
    lowercase: true,
  },

  price: {
    type: Number,
    required: true,
    min:0,
    default: 0,
  },

  priceAfterDiscount: {
    type: Number,
    min:0,
    default: 0,
  },

  description: {
    type: String,
    required: true,
    maxlength: [100, 'max is 100 characters'],
    minlength: [10, 'at least 10 character for description'],
    trim: true,
    require: true
  },

stock: {
  type: Number,
  min:0,
  default: 0,
},

imgCover: {
type: String,


}




});

export const brandModel = model("brand", brandSchema);
