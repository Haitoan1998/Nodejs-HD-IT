const { json } = require("express");
const connection = require("../config/database"); //import module conection mysql2
const {
  GetListUsers,
  CreateUser,
  RenderUserById,
} = require("../services/CRUDService");

class homeController {
  async getHomePage(req, res, next) {
    const results = await GetListUsers();
    res.render("home.ejs", { listUsers: results });
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
  RenderCreateUser(req, res, next) {
    res.render("create.ejs");
  }
  async CreateUser(req, res, next) {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let { email, name, city } = req.body;
    // connection.query(
    //   `INSERT INTO User (email, name, city)
    //   VALUES (?, ?, ?);`,
    //   [email, name, city],
    //   function (err, results) {
    //     res.send("ok");
    //   }
    // );
    await CreateUser(email, name, city);
    res.send("0k");
  }
  async EditUsers(req, res, next) {
    const results = await RenderUserById(req.params.id);
    console.log(results);
    const user = results && results.length > 0 ? results[0] : {};
    res.render("edit.ejs", { user: user });
  }
}
module.exports = new homeController();
