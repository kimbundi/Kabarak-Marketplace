import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/Useroute.js"
import 'dotenv/config'
import cartRouter from "./routes/Cartroute.js"
import orderRouter from "./routes/Orderroute.js"



//app configg
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();
//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(reg,res)=>{
    res.send("API Working")

})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://kimbundi:KIM68nyabiba@cluster0.rjdvw.mongodb.net/?
