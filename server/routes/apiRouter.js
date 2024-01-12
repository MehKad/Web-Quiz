const express = require("express");
const router = express.Router();
const apiControllers = require("../controllers/apiControllers");

router.post("/register", apiControllers.register);
router.post("/login", apiControllers.login);

module.exports = router;