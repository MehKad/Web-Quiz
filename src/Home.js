import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./userContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    const fetchQuizes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/home");
        setQuizes(response.data);
      } catch (error) {
        console.error("Error fetching quizes:", error);
      }
    };

    fetchQuizes();
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div>
      <h1>Quiz Titles</h1>
      <ul>
        {quizes.map((quiz, index) => (
          <li key={index}>
            <Link to={`/quiz/${quiz._id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
      {user && user.data.user.isTeacher && (
        <Link to={"/addQuiz"}>
          <button>Create Quiz</button>
        </Link>
      )}
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Home;
