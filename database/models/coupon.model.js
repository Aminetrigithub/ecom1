import { Schema, model } from "mongoose";

const couponSchema = new Schema({


  code: {
    type: String,
    required: true,
    trim: true,
    minlength: [6,"Code is too short, must at least 6 characters"]
  } ,

  expires: {
    type: Date
  },

  discount: {
    type: Number,
  }


});

export const couponModel = model("coupon", couponSchema);
