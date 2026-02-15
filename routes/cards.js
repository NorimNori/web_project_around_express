const express = require("express");

const { getAllCards, createCard, deleteCard } = require("../controllers/cards");

const router = express.Router();

router.get("/", getAllCards);

router.post("/", createCard);

router.delete("/:id", deleteCard);

module.exports = router;
