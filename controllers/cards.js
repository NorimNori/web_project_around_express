const Card = require("../models/cards");

const getAllCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).json(cards);
    })
    .catch(() => {
      res.status(500).json({
        message: "Error interno del servidor",
      });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => {
      res.status(201).json(card);
    })
    .catch(() => {
      res.status(400).json({
        message: "Datos inválidos",
      });
    });
};

const deleteCard = (req, res) => {
  const { id } = req.params;

  Card.findByIdAndDelete(id)
    .then((card) => {
      if (!card) {
        return res.status(404).json({
          message: "Tarjeta no encontrada",
        });
      }

      res.status(200).json({
        message: "Tarjeta eliminada correctamente",
      });
    })
    .catch(() => {
      res.status(500).json({
        message: "Error interno del servidor",
      });
    });
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
};
