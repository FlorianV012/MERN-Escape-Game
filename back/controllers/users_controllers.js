const User = require("../models/users_models");

exports.signup = (req, res, next) => {
  const user = new User({
    ...req.body,
  });
  user
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
exports.login = (req, res, next) => {
  User.findOne({ id: req.params.email })
    .then((room) => {
      res.status(200).json(room);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};
