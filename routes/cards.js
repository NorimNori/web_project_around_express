const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const router = express.Router();

const cardsPath = path.join(__dirname, "..", "data", "cards.json");

router.get("/", async (req, res) => {
  try {
    const data = await fs.readFile(cardsPath, { encoding: "utf8" });
    const cards = JSON.parse(data);
    res.json(cards);
  } catch (error) {
    res.status(500).json({
      message: "Error al leer los datos de tarjetas",
    });
  }
});

module.exports = router;
