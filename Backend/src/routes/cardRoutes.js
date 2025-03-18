const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");


// Test route (For testing Purpose Only)
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Clash Royale API is working!" });
});

// Route to fetch Clash Royale cards (Home Page)
router.get("/cards", cardController.getCards);

module.exports = router;