import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});
