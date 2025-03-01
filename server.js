import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";
import { destinationRouter } from "./routes/destinationRoutes.js";

dotenv.config();

const app = express();


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.use(express.json());
app.use(cors());
app.use("/api/destination",destinationRouter);
app.use("/api/user",userRouter);


app.get(("/"),(req,res)=>{
    res.send("WELCOME TO GLOBETROTTER API!");
});

app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
});