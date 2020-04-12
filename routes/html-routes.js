const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(
      "C:/users/dusti/desktop/homework/eatdaburger/views/layouts/main.handlebars",
      { headers: { "Content-Type": "html" } }
    );
  });
};
