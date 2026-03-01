// import React, { useState } from 'react';
import { useState } from 'react';
import './Signup.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate()
  const [State,setState]= useState({
    fullname:"",
    email : "",
    password : "",
    phone:""
  })

  function handleChange(e){
    const {name,value} = e.target;
    setState((prev)=>({
      ...prev,
      [name] : value
    }))
  }

   async function handleSubmit (e){
    e.preventDefault();
    console.log(State)
    try{
      const response = await axios.post("http://localhost:5000/Signup",State)
      console.log(response);
      if(response.status===201)
      {
        alert("Account Created!");
            navigate("/login");

      }
    }
    catch(error)
    {console.log("Error in Api call " +error)}
    


  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Please fill in the details below</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" name="fullname" onChange={handleChange} required  />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="example@mail.com" name="email" onChange={handleChange} required />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" name="password" onChange={handleChange} required />
            </div>



            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="05xxxxxxxx" name="phone" onChange={handleChange}  />
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

