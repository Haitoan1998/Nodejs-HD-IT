const express = require("express"); //commonjs-import thư viện Express
const path = require("path"); //commonjs-import thư viện có sẵn khi cài nodejs:
//để xử lý thao tác với đường dẫn path.join(), path.resolve(), path.dirname(), path.basename(), path.extname()
require("dotenv").config(); //import thư viện dotenv để quán lý biến môi trường: lưu dữ liệu bí mật, tt nhạy cảm

// import express from "express";
console.log(process.env);
const app = express(); //app express
const port = process.env.PORT || 8008; //PORT
const hostname = process.env.HOST_NAME; //hostname

//cấu hình templates engine
app.set("views", path.join(__dirname, "views")); //thiết lập đường dẫn tới thư mục chứa các tệp tempalte engine (views) của ứng dụng
app.set("view engine", ".ejs"); //thiết lập loại template engine mà ứng dụng sử dụng để tạo ra các trang HTML,với phần mở rộng là .ejs

//cấu hình static files
app.use(express.static(path.join(__dirname, "public")));

//Khai báo route để biết website có những route nào
//tại đây '/' mặc định là homepage
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.send("Hello World!");
});
app.get("/Check", (req, res) => {
  res.send("<h1>HOI DAN IT<h1/>");
});
app.get("/example", (req, res) => {
  res.render("example.ejs");
});

//run server trên port đã khởi tạo bên trên
//nạp các thông tin khai báo ở trên rồi chạy(ở đây là route)
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
