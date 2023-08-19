const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  //cấu hình templates engine
  app.set("views", path.join("./src", "views")); //thiết lập đường dẫn tới thư mục chứa các tệp tempalte engine (views) của ứng dụng
  app.set("view engine", ".ejs"); //thiết lập loại template engine mà ứng dụng sử dụng để tạo ra các trang HTML,với phần mở rộng là .ejs

  //cấu hình static files: với thư mục public: client có thể truy cập công khai được
  //thiết lập đường dẫn public __dirname/public=src/public(dùng express.static)
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
