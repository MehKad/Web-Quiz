import React, { useState, useContext } from "react";
import { UserContext } from "./userContext";
import axios from "axios";
import "./style/AddQuiz.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddQuiz = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [quiz, setQuiz] = useState({
    title: "",
    username: user.data.user.username,
    questions: [
      {
        text: "",
        options: [""],
        correctOption: "",
      },
    ],
  });

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        { text: "", options: [""], correctOption: "" },
      ],
    });
  };

  const addOption = (qIndex) => {
    const newQuestions = [...quiz.questions];
    newQuestions[qIndex].options.push("");
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/add", quiz);
      console.log(response.data);
      toast.success("Added successful!");
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="add-quiz-details">
        <h1 className="quiz-title">Quiz Details</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <label className="label-title">Quiz Title:</label>
          <input
            type="text"
            value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            className="input-field"
          />
          {quiz.questions.map((question, qIndex) => (
            <div key={qIndex} className="question-container">
              <label className="question-label">Question:</label>
              <input
                type="text"
                value={question.text}
                onChange={(e) => {
                  const newQuestions = [...quiz.questions];
                  newQuestions[qIndex].text = e.target.value;
                  setQuiz({ ...quiz, questions: newQuestions });
                }}
                className="input-field"
              />
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="option-container">
                  <label className="option-label">Option:</label>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const newQuestions = [...quiz.questions];
                      newQuestions[qIndex].options[oIndex] = e.target.value;
                      setQuiz({ ...quiz, questions: newQuestions });
                    }}
                    className="input-field"
                  />
                </div>
              ))}
              <label className="question-label">Correct Option:</label>
              <input
                type="text"
                value={question.correctOption}
                onChange={(e) => {
                  const newQuestions = [...quiz.questions];
                  newQuestions[qIndex].correctOption = e.target.value;
                  setQuiz({ ...quiz, questions: newQuestions });
                }}
                className="input-field"
              />
              <button
                type="button"
                onClick={() => addOption(qIndex)}
                className="add-button"
              >
                Add Option
              </button>
            </div>
          ))}

          <div className="buttons-wrapper">
            <button type="button" onClick={addQuestion} className="add-button">
              Add Question
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddQuiz;
