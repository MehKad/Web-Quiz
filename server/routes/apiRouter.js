const express = require("express");
const router = express.Router();
const apiControllers = require("../controllers/apiControllers");

router.post("/register", apiControllers.register);
router.post("/login", apiControllers.login);
router.get("/home", apiControllers.getQuizes);
router.get("/Quiz/:id", apiControllers.getQuizebyId);
router.post("/add", apiControllers.addQuiz);

module.exports = router;
