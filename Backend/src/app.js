const express = require("express");
const cors = require("cors");


const app = express();


// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const cardRoutes = require("./routes/cardRoutes"); 
// Register routes
app.use("/api", cardRoutes);

// setup a route so that all links will be handled
app.all("*", (req, res)=>{
    res.status(200).json({message: "Go to /api/test or /api/cards"})
});

module.exports = app;
