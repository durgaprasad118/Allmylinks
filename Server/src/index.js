import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import { app } from "./app.js";
import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 2020, () => {
      console.log("app is runnign at the above");
    });
  })
  .catch((er) => {
    console.log(er);
  });
