import { app } from "./app.js";
import { mongoConnection } from "./data/mongoose.js";

mongoConnection();
app.listen(process.env.PORT, () => {
  console.log(`server successfully launched on PORT : ${process.env.PORT}`);
});
