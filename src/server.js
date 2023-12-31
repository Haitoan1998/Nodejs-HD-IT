require("dotenv").config(); //import thư viện dotenv để quán lý biến môi trường: lưu dữ liệu bí mật, tt nhạy cảm
const express = require("express"); //commonjs-import thư viện Express
const path = require("path"); //commonjs-import thư viện có sẵn khi cài nodejs:
//để xử lý thao tác với đường dẫn path.join(), path.resolve(), path.dirname(), path.basename(), path.extname()
const configViewEngine = require("./config/viewEngine"); //import configViewEngine
const webRouter = require("./routes/web"); //import router
const connection = require("./config/database"); //import module conection mysql2

const app = express(); //app express
const port = process.env.PORT || 8008; //PORT
const hostname = process.env.HOST_NAME; //hostname

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//cấu hình templates engine, static files
configViewEngine(app);

//Khai báo route để biết website có những route nào
//tại đây '/' mặc định là homepage
app.use("/", webRouter);

//test connection to DB

// simple query
// connection.query("SELECT * FROM User", function (err, results, fields) {
//   console.log(">>>>>results =", results); // results contains rows returned by server
//   console.log(">>>>>fields=", fields); // fields contains extra meta data about results, if available
// });

//run server trên port đã khởi tạo bên trên
//nạp các thông tin khai báo ở trên rồi chạy(ở đây là route)
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
