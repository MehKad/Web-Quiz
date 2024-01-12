const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  isTeacher: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
