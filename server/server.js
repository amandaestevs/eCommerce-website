const PORT = 8000;
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("connected");
});

const products = require('./productsRoutes.js');
app.use('/products', products);

app.listen(PORT);
