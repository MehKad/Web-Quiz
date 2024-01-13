const User = require("../models/user");
const Quiz = require("../models/Quiz");

const apiControllers = {
  register: async (req, res) => {
    const { email, username, phone, password, Cpassword } = req.body;

    try {
      const existingUser = await User.findOne({
        $or: [{ email }, { username }], //The $or is used to check either with the email, or the password
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "Email or username already exists" });
      }

      if (password === Cpassword) {
        const newUser = new User({ email, username, phone, password });

        const savedUser = await newUser.save();

        res.json(savedUser);
      } else {
        res
          .status(400)
          .json({ error: "Password and confirm password do not match" });
      }
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  login: async (req, res) => {
    const { idUser, password } = req.body;

    try {
      const user = await User.findOne({
        $or: [{ email: idUser }, { username: idUser }],
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.password === password) {
        res.json({ message: "Login successful", user });
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getQuizes: async (req, res) => {
    try {
      const quizzes = await Quiz.find();

      res.json(quizzes);
    } catch (error) {
      console.error("Error getting quizes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getQuizebyId: async (req, res) => {
    try {
      const { id } = req.params;
      const quiz = await Quiz.findById(id);
      res.json(quiz);
    } catch (error) {
      console.error("Error getting quiz:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  addQuiz: async (req, res) => {
    try {
      const { title, username, questions } = req.body;

      const newQuiz = new Quiz({
        title,
        username,
        questions,
      });

      const savedQuiz = await newQuiz.save();

      res.json(savedQuiz);
    } catch (error) {
      console.error("Error adding quiz:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = apiControllers;
