const mysql = require("mysql2"); //import mysql2
require("dotenv").config(); //import thư viện dotenv để quán lý biến môi trường: lưu dữ liệu bí mật, tt nhạy cảm

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //default 3306
  user: process.env.DB_USER, //default:empty
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
