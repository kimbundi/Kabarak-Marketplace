import mongoose from "mongoose"

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kimbundi:KIM68nyabiba@cluster0.rjdvw.mongodb.net/food-del').then(()=>console.log("DB connected"));

}