const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expreshandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseController = require("./controllers/courses");

application.use(
  bodyparser.urlencoded({
    extended: true
  })
);

application.set("views", path.join(__dirname, "/views/"));

application.engine(
  "hbs",
  expreshandlebars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layourDir: __dirname + "/views/layouts"
  })
);

application.set("view engine", "hbs");

application.get("/", (req, res) => {
  //   res.send("<h1> hello world </h1>");

  res.render("index.hbs", {});
});

application.use("/course", CourseController);

application.listen("3000", () => {
  console.log("Server started ");
});
