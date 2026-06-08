const router = require("express").Router();

const { chat } = require("../controllers/chat.controller");
const validateChat = require("../middleware/validateChat");

router.post("/", validateChat, chat);

module.exports = router;
