import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app config
const app=express()
const port="https://tomato-food-app-f2at.onrender.com"


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
 res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`)
})

//mongodb+srv://greatstack:agartala@cluster0.004kkgp.mongodb.net/?
//mongodb+srv://greatstack:agartala@cluster0.004kkgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
