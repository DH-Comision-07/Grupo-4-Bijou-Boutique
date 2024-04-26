const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlerwares/userMiddlewares");

router.get("/login", userController.login);
router.get("/register", userController.register);

router.get("/create/", userController.create);
router.post("/", upload.single("users-image"), userController.store);

module.exports = router;
