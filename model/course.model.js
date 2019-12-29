const mongoose = require("mongoose");

var CourseSchema = mongoose.Schema({
  CourseName: {
    type: String,
    required: "required"
  },
  CourseId: {
    type: String
  },
  CourseDuration: {
    type: String
  }
});

mongoose.model("course", CourseSchema);
