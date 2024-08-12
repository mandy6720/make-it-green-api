const express = require("express");
// const { handleMessage } = require("../controllers/messageController");

const router = express.Router();

router.get('/', (req, res) => res.json({ message: "Hello World!" }));

// router.post("/message", handleMessage);

module.exports = router;
