import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    // Check if it's a validation error
    if (error.name === 'ValidationError') {
      res.status(400).json({ success: false, message: error.message });
    } else {
      // For other errors, forward to the error middleware
      next(error);
    }
  }
};

