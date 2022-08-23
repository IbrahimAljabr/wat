const express = require("express");
const router = express.Router();

const { changePassword } = require("../controllers/change-password");

router.post("/change-password", changePassword);

module.exports = router;
