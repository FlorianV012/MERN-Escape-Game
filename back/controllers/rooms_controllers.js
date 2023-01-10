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

// Show one room
exports.getOneRoom = (req, res, next) => {
  Room.findOne({ _id: req.params.id })
    .then((room) => {
      res.status(200).json(room);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};
