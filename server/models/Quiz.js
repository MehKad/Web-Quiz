const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  username: { type: String, required: true },
  questions: [
    {
      text: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctOption: { type: String, required: true },
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
