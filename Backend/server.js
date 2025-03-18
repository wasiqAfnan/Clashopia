const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables


const app = require("./src/app"); // Importing app.js

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running`);
});
