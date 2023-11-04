import jwt from "jsonwebtoken";
export const sendCookie = (res, user, statusCode = 201, message) => {
  const token = jwt.sign({ _id: user._id }, "heyheyhey");

  return res
    .status(statusCode)
    .cookie("token", token, {
      httpsOnly: true,
      maxAge: 15 * 60 * 1000,
    })
    .json({
      success: true,
      message,
    });
};
