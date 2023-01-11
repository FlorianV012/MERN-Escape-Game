const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  capacity: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  minplayers: { type: Number, required: true },
});

module.exports = mongoose.model("Room", roomSchema);
