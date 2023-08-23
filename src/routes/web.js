const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getHomePage);

router.get("/abc", homeController.getABC);

router.get("/Check", homeController.getCheck);

router.get("/example", homeController.getExample);

router.get("/Create", homeController.RenderCreateUser);
router.post("/Create-user", homeController.CreateUser);

router.get("/edit-user/:id", homeController.EditUsers);

module.exports = router;
