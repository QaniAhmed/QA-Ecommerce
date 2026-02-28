// import React, { useState } from 'react';
import './Signup.css';


export default function SignupPage() {

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Please fill in the details below</p>

        <form className="signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" name="fullname" required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="example@mail.com" name="email" required />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" name="password" required />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="05xxxxxxxx" name="phone" required />
            </div>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

