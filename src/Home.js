import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [quizes, setQuizes] = useState([]);
  const location = useLocation();
  const yourData = location.state?.yourDataKey;

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

  const handleNavigation = () => {
    navigate("/addQuiz", { state: { yourDataKey: yourData } });
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
      {yourData && yourData.isTeacher && (
        <button onClick={handleNavigation}>Create Quiz</button>
      )}
    </div>
  );
};

export default Home;
