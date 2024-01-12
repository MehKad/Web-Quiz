import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Login.css";

const Login = () => {
  const [idUser, setIdUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        idUser,
        password,
      });

      console.log(response.data);
      toast.success("Login successful!");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("User not found");
        } else if (error.response.status === 401) {
          toast.error("Incorrect password");
        } else {
          console.error("Login error:", error.response.data);
          toast.error(
            "An error occurred during login. Please try again later."
          );
        }
      }
    }
  };

  return (
    <>
      <div className="parent">
        <div className="left">
          <div className="column-1">
            <img
              className="logo"
              src="assets/2.png"
              alt="Description of the logo"
            />
            <span className="span">
              <h1 className="text">Sign in to </h1>
              <h2 className="text">Our Webpage Quiz project </h2>
              <div className="Paragraphs">
                <p className="div-1">If you don’t have an account</p>
                <p className="div-2">
                  You can <Link to="/register">Register here!</Link>
                </p>
              </div>
            </span>
          </div>
          <div className="column-2">
            <img
              loading="lazy"
              src="assets/1.png"
              className="img"
              alt="Human"
            />
          </div>
        </div>
        <div className="right">
          <h1 className="div-3">Sign in</h1>
          <input
            type="text"
            className="email"
            placeholder="Enter email or username"
            onChange={(e) => setIdUser(e.target.value)}
          />
          <input
            type="password"
            className="pass"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
