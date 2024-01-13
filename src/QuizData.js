import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizData = () => {
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
    <div>
      <h1>Quiz Details</h1>
      {quizDetails.questions?.map((i) => (
        <div key={i._id}>
          <p>{i.text}</p>
          <ul>
            {i.options?.map((option, index) => (
              <li
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => handleOptionClick(option, i.correctOption)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizData;
