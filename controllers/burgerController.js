const Burger = require("../models/burger");
const express = require("express");
const router = express.Router();

// Gets all burgers from database.
router.get("/", (req, res) => {
  Burger.findAll()
    .then(burgers => {
      res.render('burgers', {
          burgers
      });
    })
    .catch(err => console.log(err));
});


// Add a burger
router.post('/', (req, res) => {
    let { burgerName } = req.body;

    Burger.create({

        burger_name: burgerName,
        devoured: 0
    })
    .then(burger => res.redirect('/'))
    .catch(err => console.log(err));
    
});



router.get('/eat', (req, res) => {
    res.send(req.body)
    conssole.log(req.body)
    Burger.update({
        devoured: 1
    })
    .then(burger => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router;
//   app.post("/api/new", function(req, res) {
//     console.log("Burger Data:");
//     console.log(req.body);

//     Burger.create({
//       burger_name: req.body.burger_name,
//       devoured: req.body.devoured,
//     }).then(function(results) {
//       // `results` here would be the newly created chirp
//       console.log(results);
//       res.end();
//     });
//   });
