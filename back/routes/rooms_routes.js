const express = require("express");
const router = express.Router();

const roomsCtrl = require("../controllers/rooms_controllers");

router.get("/", roomsCtrl.indexRooms);
// router.get("/:id", roomsCtrl.getOneRoom);
// router.post("/", roomsCtrl.createRoom);
// router.put("/:id", roomsCtrl.modifyRoom);
// router.delete("/:id", roomsCtrl.deleteRoom);

module.exports = router;