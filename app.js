const express = require("express");

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

app.use("/cards", cardsRouter);
app.use("/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Recurso solicitado no encontrado",
  });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
