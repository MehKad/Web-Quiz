import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./userContext";
import { Link } from "react-router-dom";
import "./style/Home.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiTrash } from "react-icons/fi";

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

  const deleteQuiz = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quiz?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:5000/api/Quiz/${id}`)
        .then((res) => {
          console.log(res.data);
          toast.success("Deleted successful!");
          window.location.reload();
          setQuizes(quizes.filter((el) => el._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting quiz:", error);
        });
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Quiz Titles</h1>
      <ul className="home-list">
        {quizes.map((quiz, index) => (
          <li className="home-list-items" key={index}>
            <Link to={`/quiz/${quiz._id}`}>{quiz.title}</Link>
            {user &&
              user.data.user.isTeacher &&
              user.data.user.username == quiz.username && (
                <button className="edit" onClick={() => deleteQuiz(quiz._id)}>
                  <FiTrash />
                </button>
              )}
          </li>
        ))}
      </ul>
      <div className="wrapp-buttons">
        {user && user.data.user.isTeacher && (
          <Link to={"/addQuiz"}>
            <button className="Home-button">Create Quiz</button>
          </Link>
        )}
        {user && (
          <button className="Home-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
