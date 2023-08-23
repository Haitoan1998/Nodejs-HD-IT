const connection = require("../config/database");

const GetListUsers = async () => {
  let [results, fields] = await connection.query(`SELECT * FROM User`);
  return results;
};
const CreateUser = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `INSERT INTO User (email, name, city)
     VALUES (?, ?, ?);`,
    [email, name, city]
  );
};
const RenderUserById = async (Id) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM User WHERE id = ?`,
    [Id]
  );
  return results;
};
module.exports = { GetListUsers, CreateUser, RenderUserById };
