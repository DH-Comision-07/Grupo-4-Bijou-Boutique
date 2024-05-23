const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.get("/aboutUs", indexController.aboutUs);


module.exports = router;
