import { Schema, model } from "mongoose";

const userSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "text is too short"],
  },

  productId: {
    type: Schema.ObjectId,
    ref: "product",
    required: true,
    
  },

  userId: {
    type: String,
    ref: "user",
    minlength: [6, "at least 6 characters"],
  },

  rate: {
    type: Number,
    default: 0,
  },
  
  blocked: {},
  role: {},
});

export const userModel = model("user", userSchema);
