const Sequelize = require("sequelize");

const connection = require("../config/connection");


const Burger = connection.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.TINYINT
  });

Burger.sync();

module.exports = Burger; 