import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
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

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});

app.use('/backend/user', userRouter)
app.use('/backend/auth', authRouter)

app.use((err, req,res, next)=> {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error'

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})