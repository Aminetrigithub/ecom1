import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  users: {
    type: [user],
  },

  products: {
    type: [product],
  },

  quantity: {
    type: Number,
    default: 1,
  },
});

export const cartModel = model("cart", cartSchema);
