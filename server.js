require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./src/routes/");

const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.use("/", routes);

app.listen(port, () => console.log(`server is on port ${port}`));
