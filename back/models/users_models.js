const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isConfirm: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
