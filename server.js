var express = require("express");
const exphbs = require("express-handlebars");

var app = express();

var db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// Use handlebars view engine
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

db.sequelize.sync({ extended: true }).then(function () {
  app.listen(process.env.PORT || 8080, function () {
    console.log("App listening on PORT " + this.address().port);
  });
});
