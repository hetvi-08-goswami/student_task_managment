import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="form-container">
        {/*page title*/}
        <h1 className="from-title">Register</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="">Full Name </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>

          {/*email*/}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* phone Number field*/}
          <div className="form-group">
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>

          {/*password*/}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="creat a password"
            />
          </div>

          {/*submit button*/}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
