class homeController {
  getHomePage(req, res, next) {
    res.send("Hello World!");
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
}
module.exports = new homeController();
