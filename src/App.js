import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import QuizData from "./QuizData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddQuiz from "./AddQuiz";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz/:id" element={<QuizData />} />
        <Route path="/addQuiz" element={<AddQuiz />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
