const User = require("../models/users");

const getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({
        message: "Error interno del servidor",
      });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "Usuario no encontrado",
        });
      }

      res.status(200).json(user);
    })
    .catch(() => {
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
      res.status(400).json({
        message: "Datos inválidos",
      });
    });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
