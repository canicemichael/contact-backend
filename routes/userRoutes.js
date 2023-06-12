const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  registerPage,
  loginPage,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.get('/register', registerPage);

router.post("/register", registerUser);

router.get('/login', loginPage);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
