const { json } = require("express");
const connection = require("../config/database"); //import module conection mysql2

class homeController {
  getHomePage(req, res, next) {
    res.render("home.ejs");
  }
  getABC(req, res, next) {
    res.send("Hello World!");
  }
  getCheck(req, res, next) {
    res.send("<h1>HOI DAN IT<h1/>");
  }
  getExample(req, res, next) {
    res.render("example.ejs");
  }
  CreateUser(req, res, next) {
    console.log(req.body);
    res.send("create new user");
  }
}
module.exports = new homeController();
