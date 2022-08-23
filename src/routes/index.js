const express = require("express");
const router = express.Router();

const loginRouter = require("./login");
const signupRouter = require("./sign-up");
const changePasswordRouter = require("./change-password");
const weatherRouter = require("./weather");

router.use("/api", loginRouter);
router.use("/api", changePasswordRouter);
router.use("/api", signupRouter);
router.use("/api", weatherRouter);

module.exports = router;
