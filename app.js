import express from "express";
import userRouter from "./routers/user.js";
import { config } from "dotenv";
export const app = express();

config({
  path: "./data/config/config.env",
});
//* middlewares ;

// !  1) Routers ;
app.use(express.json());
app.use("/api/v1/user", userRouter);

// ? 2) normal middlewares;
