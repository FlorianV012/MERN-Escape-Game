const express = require("express");
const app = express();
require("dotenv").config();
const mongoClient = require("./mongoClient");

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const roomsRoutes = require("./routes/rooms_routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/rooms", roomsRoutes);

app.listen(port, () => {
  console.log(`Serveur connecté sur le port : ${port}`);
});
