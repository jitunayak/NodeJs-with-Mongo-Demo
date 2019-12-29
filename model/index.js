const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Edureka",
  { useNewUrlParser: true, useUnifiedTopology: true },
  error => {
    if (!error) {
      console.log("successfully connected");
    } else {
      console.log("Failed to connect");
    }
  }
);

const Course = require("./course.model");
