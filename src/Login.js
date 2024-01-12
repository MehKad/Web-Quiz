import * as React from "react";
import { Link } from "react-router-dom";
import "./style/Login.css";

const Login = (props) => {
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
          />
          <input type="password" className="pass" placeholder="Password" />

          <button className="login">Login</button>
        </div>
      </div>
    </>
  );
};
export default Login;
