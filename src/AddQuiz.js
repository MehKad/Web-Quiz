import React, { useState, useContext } from "react";
import { UserContext } from "./userContext";
import axios from "axios";

const AddQuiz = () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Quiz Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Quiz Title:
          <input
            type="text"
            value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
          />
        </label>
        {quiz.questions.map((question, qIndex) => (
          <div key={qIndex}>
            <label>
              Question:
              <input
                type="text"
                value={question.text}
                onChange={(e) => {
                  const newQuestions = [...quiz.questions];
                  newQuestions[qIndex].text = e.target.value;
                  setQuiz({ ...quiz, questions: newQuestions });
                }}
              />
            </label>
            {question.options.map((option, oIndex) => (
              <div key={oIndex}>
                <label>
                  Option:
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const newQuestions = [...quiz.questions];
                      newQuestions[qIndex].options[oIndex] = e.target.value;
                      setQuiz({ ...quiz, questions: newQuestions });
                    }}
                  />
                </label>
              </div>
            ))}
            <label>
              Correct Option:
              <input
                type="text"
                value={question.correctOption}
                onChange={(e) => {
                  const newQuestions = [...quiz.questions];
                  newQuestions[qIndex].correctOption = e.target.value;
                  setQuiz({ ...quiz, questions: newQuestions });
                }}
              />
            </label>
            <button type="button" onClick={() => addOption(qIndex)}>
              Add Option
            </button>
          </div>
        ))}
        <button type="button" onClick={addQuestion}>
          Add Question
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuiz;
