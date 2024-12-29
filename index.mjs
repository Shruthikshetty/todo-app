import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// setting up express app
const app = express();

//configring the dotenv to read env variables
dotenv.config();

//connect to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch((err) => {
    console.log("failed to connect to the data base ");
  });

//routes
app.get("/", (req, res) => {
  res.send("Api for simple Todo application");
});

// listening to port
app.listen(process.env.PORT, () => {
  console.log("server is running in port " + process.env.PORT);
});
