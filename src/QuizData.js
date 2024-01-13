import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/QuizData.css";
import { FiChevronLeft } from "react-icons/fi";

const QuizData = () => {
  const navigate = useNavigate();

  const [quizDetails, setQuizDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/Quiz/${id}`
        );
        setQuizDetails(response.data);
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      }
    };

    fetchQuizDetails();
  }, [id]);

  const handleOptionClick = (selectedOption, correctOption) => {
    if (selectedOption === correctOption) {
      toast.success("Correct choice!");
    } else {
      toast.error("Incorrect choice. Try again!");
    }
  };

  return (
    <>
      <div className="quiz-details">
        <div className="header">
          <button onClick={() => navigate("/home")} className="back-button">
            <FiChevronLeft />
          </button>
          <h1 className="quiz-title">Quiz Details</h1>
        </div>
        {quizDetails.questions?.map((i, questionIndex) => (
          <div key={i._id} className="question-container">
            <p className="question-text">{i.text}</p>
            <ul className="options-list">
              {i.options?.map((option, index) => (
                <li
                  key={index}
                  className="option"
                  onClick={() => handleOptionClick(option, i.correctOption)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuizData;
