const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const mongoModel = mongoose.model("course");

router.get("/add", (req, res) => {
  res.render("add-course");
});

router.post("/add", (req, res) => {
  var course = new mongoModel();
  course.CourseName = req.body.CourseName;
  course.CourseId = Math.ceil(Math.random() * 10000);
  course.CourseDuration = req.body.CourseDuration;
  course.save((err, doc) => {
    if (!err) {
      res.redirect("/course/list");
    } else {
      res.send("Error occured while saving");
    }
  });
});

router.get("/list", (req, res) => {
  //Setting sample data
  //   var course = new mongoModel();
  //   course.CourseName = "Node";
  //   course.CourseId = "4";
  //   course.CourseDuration = "4hrs";
  //   course.save();

  mongoModel.find((err, docs) => {
    if (!err) {
      console.log(docs);
      res.render("list.hbs", { data: docs });
    }
  });
});

module.exports = router;
