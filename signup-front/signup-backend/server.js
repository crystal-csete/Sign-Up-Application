/** @format */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("database connected")
);

// make sure the following is in this order!!!

// this acts as a bodyparser
app.use(express.json());

app.use(cors());

app.use("/app", routesUrls);

// Server success message in terminal
app.listen(4000, () => console.log("Server is up and running"));
