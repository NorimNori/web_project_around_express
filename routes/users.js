const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const router = express.Router();

const usersPath = path.join(__dirname, "..", "data", "users.json");

router.get("/", async (req, res) => {
  try {
    const data = await fs.readFile(usersPath, { encoding: "utf8" });
    const users = JSON.parse(data);
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al leer los datos de usuarios",
    });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await fs.readFile(usersPath, { encoding: "utf8" });
    const users = JSON.parse(data);

    const user = users.find((u) => u._id === userId);

    if (!user) {
      return res.status(404).json({
        message: "ID de usuario no encontrado",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error al leer los datos de usuarios",
    });
  }
});

module.exports = router;
