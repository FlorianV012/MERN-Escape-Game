const express = require("express");
const router = express.Router();

const usersCtrl = require("../controllers/users_controllers");

router.post("/", usersCtrl.signup);
router.get("/:id", usersCtrl.login);


module.exports = router;