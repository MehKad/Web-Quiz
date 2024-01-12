import * as React from "react";
import { Link } from "react-router-dom";
import "./style/Register.css";

const Register = (props) => {
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
              <h1 className="text">Sign up to </h1>
              <h2 className="text">Our Webpage Quiz project </h2>
              <div className="Paragraphs">
                <p className="div-1">If you already have an account</p>
                <p className="div-2">
                  You can <Link to="/login">Login here!</Link>
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
          <h1 className="div-3">Sign up</h1>
          <input type="text" className="data" placeholder="Enter email" />
          <input type="text" className="data" placeholder="Creat a username" />
          <input type="text" className="data" placeholder="Phone number" />
          <input type="password" className="pass" placeholder="Password" />
          <input
            type="password"
            className="pass"
            placeholder="Confirm password"
          />

          <button className="register">Register</button>
        </div>
      </div>
    </>
  );
};
export default Register;
