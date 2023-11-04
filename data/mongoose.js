import mongoose from "mongoose";

export const mongoConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "DemoApiTesting",
    })
    .then(() => console.log(`MongoDB Successfully Connected`))
    .catch((error) =>
      console.log(`Error while connecting to dataBase:${error}`)
    );
};
