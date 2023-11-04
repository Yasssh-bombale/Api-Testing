import User from "../models/user.models.js";

import { sendCookie } from "../utils/cookies.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(404).json({
      success: false,
      message: "User Already Exists !",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return res.status(200).json({
    success: true,
    msg: "User successfully registered!",
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User Not Exists",
    });
  }
  const passwordIsMatch = await bcrypt.compare(password, user.password);

  if (!passwordIsMatch) {
    return res.status(400).json({
      success: false,
      message: "invalid password !",
    });
  }

  sendCookie(res, user, 201, "User Logged In Successfully !");

  // const token = jwt.sign({ _id: user._id }, "heyheyhey");

  // return res
  //   .status(201)
  //   .cookie("iAmRoy", token, {
  //     httpsOnly: true,
  //     maxAge: 15 * 60 * 1000,
  //   })
  //   .json({
  //     success: true,
  //     message: "User Logged in Successfully !",
  //   });
};
