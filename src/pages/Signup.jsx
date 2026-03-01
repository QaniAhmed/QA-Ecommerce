// import React, { useState } from 'react';
import { useState } from 'react';
import './Signup.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import SuccessView from '../components/Signup/SuccessView.jsx';
import SignUpform from '../components/Signup/form.jsx';


export default function SignupPage() {
  const [isSucces,setIssucces]= useState(false)
  const navigate = useNavigate()
  const [State,setState]= useState({
    fullname:"",
    email : "",
    password : "",
    phone:""
  })

  function handleChange(e){
    const {name,value} = e.target;
    console.log(name ," ", value)
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
        setIssucces(true)
        setTimeout(() => navigate("/login"), 3000)
          

      }
    }
    catch(error)
    {console.log("Error in Api call " +error)}
    


  }

  return (
    <div className="signup-container">
      <div className="signup-box">
       {isSucces ? (<SuccessView/>) : 
        ( <>
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Please fill in the details below</p>

            <SignUpform handleChange={handleChange} handleSubmit={handleSubmit}/>
        <p className="auth-footer">
          Already have an account? <a href="/login">Login here</a>
        </p>

        </>
        )}
      </div>
    </div>
  );
};

