import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>
      <form>
        {/*email feild */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        {/*passwrod field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        {/*submit button */}
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>


      {/* link to register page  */}
      <p className="link-text">
        Don't have an accout? <Link to="/Register">Register Here</Link>
      </p>


    </div>
    </>
  );
};

export default Login;