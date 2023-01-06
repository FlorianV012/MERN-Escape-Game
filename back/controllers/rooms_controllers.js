const Room = require("../models/rooms_models");

// Index rooms
exports.indexRooms = (req, res, next) => {
  Room.find()
    .then((rooms) => {
      res.status(200).json(rooms);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
