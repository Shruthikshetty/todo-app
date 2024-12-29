import express from "express";
import dotenv from "dotenv";

// setting up express app
const app = express();

//configring the dotenv to read env variables
dotenv.config();

//routes
app.get("/", (req, res) => {
  res.send("Api for simple Todo application");
});

// listening to port
app.listen(process.env.PORT, () => {
  console.log("server is running in port " + process.env.PORT);
});
