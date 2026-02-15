const User = require("../models/users");

const getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error interno del servidor" });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .orFail()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).json({
          message: "Usuario no encontrado",
        });
      }

      if (err.name === "CastError") {
        return res.status(400).json({
          message: "ID inválido",
        });
      }

      res.status(500).json({
        message: "Error interno del servidor",
      });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).json({
          message: "Datos inválidos",
        });
      }

      res.status(500).json({
        message: "Error interno del servidor",
      });
    });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
