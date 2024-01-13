import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import QuizData from "./QuizData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddQuiz from "./AddQuiz";
import { UserContext } from "./userContext";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/quiz/:id"
          element={user ? <QuizData /> : <Navigate to="/" />}
        />
        <Route
          path="/addQuiz"
          element={user ? <AddQuiz /> : <Navigate to="/" />}
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
