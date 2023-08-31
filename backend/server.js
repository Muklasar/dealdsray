const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors')

const app = express();

// config env
require("dotenv").config();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`Datbase connection error ${err}`));

// middleware
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors())

// route
const employee = require("./router/employee");

app.use("/api", employee);

// frontend intergration
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// port
const port = process.env.PORT || 8000;

// listen
app.listen(port, console.log(`Server Runing on port ${port}`));
