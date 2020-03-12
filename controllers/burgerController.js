const Burger = require("../models/burger");
const express = require("express");
const connection = require("../config/connection");
const router = express.Router();


// Gets all burgers from database.
router.get("/", (req, res) => {
  Burger.findAll()
    .then(results => {
      console.log(results);
      res.send(results);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
});

// Add a burger
router.get('/add', (req, res) => {
    const data = {
        burger_name: "Blackbean",
        devoured: 0
    }

    let { burger_name, devoured } = data;

    Burger.create({
        burger_name,
        devoured
    })
    .then(burger => res.redirect('/burgers'))
    .catch(err => console.log(err));
})


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
