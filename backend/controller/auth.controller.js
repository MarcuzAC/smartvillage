import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    // Check if it's a validation error
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      // For other errors, forward to the error middleware
      next(error);
    }
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User does not exist"));

    // Compare the provided password with the hashed password stored in the database
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));

    // Generate JWT token for authentication
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    //Avoiding sending passwordback to user
    const {password: pass, ...rest} = validUser._doc

    // Set the token in a cookie and send the user data along with the response
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
