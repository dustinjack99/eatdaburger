
var db = require("../models");

module.exports = function(app) {

  app.get('/', function (req, res) {
    db.Burger.findAll({}).then(function(burgers) {
      res.render('burgers', {
        burgers
      })
    });
});

  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burgerName,
      devoured: 0
    }).then(function(dbBurger) {
      res.redirect('/');
    });
  });
 
  app.delete("/delete/:id", function(req, res) {
    console.log(req)
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      console.log(res)
      res.json(dbBurger)
      res.redirect('/');
    });

  });

  app.put("/put", function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: 1
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger)
      res.redirect('/');
    });
  });
};
