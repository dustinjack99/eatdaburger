const Sequelize = require("sequelize");

const connection = new Sequelize(
  "burgers_db",
  "root",
  "ms47I60Iq@3M",
  {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

connection.authenticate()
  .then(() => console.log('database connected'))
  .catch(err => console.log('Error: ' + err))

module.exports = connection;