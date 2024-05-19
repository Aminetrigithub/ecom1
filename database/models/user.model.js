import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Name is too short"],
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    minlength: [6, "at least 6 characters"],
  },

  verified: {
    type: Boolean,
    default: false,
  },

  blocked: {
    type: Boolean,
    default: false,
  },

  role: {
    type: String,
    enum: ["user","admin"],
    default: ["user"],
  },
});

export const userModel = model("user", userSchema);
