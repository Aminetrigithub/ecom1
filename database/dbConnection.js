import mongoose from "mongoose";

export function dbConnection(){
mongoose.connect(process.env.DB_CONNECTION)
.then(() => { console.log("DataBase connected ✔") })
.catch((err) => { console.log("Problem in connection DataBase ❓", err) })
 }