import express from "express";
import dotenv    from "dotenv"
import mongoose from "mongoose";
import auth from "./routes/auth.js" 
import hotels from "./routes/hotels.js"
import rooms from "./routes/rooms.js";
import user from "./routes/user.js";
import cookieParser from 'cookie-parser';
import cors from "cors";

const app =express();

dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const connect =async ()=>{
    try{
       await mongoose.connect(process.env.MONGO).then(res => console.log("Connected"));
    }catch(err){
        console.log(err);
        throw err;
    }
}

app.use("/api/auth",auth)
app.use("/api/hotels",hotels)
app.use("/api/rooms",rooms)
app.use("/api/user",user)

app.listen(5000,()=>{
    connect();
    console.log("server started");
})