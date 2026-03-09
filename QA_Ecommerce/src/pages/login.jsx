import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const {setUser} = useAuth()
    const navigate = useNavigate()
    const [credentials,setcredentials] = useState({
        email:"",
        password:""
    })

    function handleChagne(e){
        const {name,value}= e.target;
        console.log(name," ",value)
        setcredentials((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    async function handleSubmit(e){
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:5000/login',credentials,
              {
                withCredentials:true
              }
            )
            console.log(response)
            if(response.status ===200){
              setUser(response.data.user);
                alert('login successfully')
                navigate('/')
            }
        }
        catch(error)
        {
            console.log("Error in login Api",error)
        }
    }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please enter your details to login</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@mail.com" 
              onChange={handleChagne}
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
               onChange={handleChagne}
              required 
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to={"/register"}>Sign up for free</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;