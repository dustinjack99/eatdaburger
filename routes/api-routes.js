var db = require("../models");

module.exports = function (app) {
  //html route
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (burgers) {
      res.render("burgers", {
        burgers,
      });
      return res.redirect("/");
    });
  });

  app.post("/api/burgers", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burgerName,
      devoured: 0,
    }).then((dbBurger) => {
      return res.redirect("/");
    });
  });

  app.post("/api/burgers/delete/:id", function (req, res) {
    console.log(req.params.id);
    db.Burger.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbBurger) {
      // res.json(dbBurger);
      return res.redirect("/");
    });
  });

  app.post("/api/burgers/eat/:id", function (req, res) {
    console.log(req.params.id);
    db.Burger.update(
      {
        devoured: 1,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(function (dbBurger) {
      // res.json(dbBurger);
      return res.redirect("/");
    });
  });
};
