import { Schema, model } from "mongoose";

const brandSchema = new Schema({

userId: {
  type: Schema.ObjectId,
  ref: "user",
  required: true,
},

productId:{
type: Schema.ObjectId,
ref: "product",
required:true,
},

quantity: {
  type: Number,
  default: 1
}, 

dateOfOrder: {
  type: date,
}

});

export const brandModel = model("brand", brandSchema);
