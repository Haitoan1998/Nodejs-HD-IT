const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getHomePage);

router.get("/abc", homeController.getABC);

router.get("/Check", homeController.getCheck);

router.get("/example", homeController.getExample);

router.post("/Create-user", homeController.CreateUser);

module.exports = router;
