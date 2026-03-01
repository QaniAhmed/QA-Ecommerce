import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  // هنا ستضع الـ Logic الخاص بك (useState, handleSubmit, axios)

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please enter your details to login</p>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@mail.com" 
              required 
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>Password</label>
              <a href="/forgot-password" title='Coming soon' className="forgot-link">Forgot?</a>
            </div>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link href="/signup">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;