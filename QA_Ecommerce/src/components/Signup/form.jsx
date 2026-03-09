import React from 'react'

function SignUpform(props) {
  return (
        <form className="signup-form" onSubmit={props.handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" name="fullname" onChange={props.handleChange} required  />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="example@mail.com" name="email" onChange={props.handleChange} required />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" name="password" onChange={props.handleChange} required />
            </div>



            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="05xxxxxxxx" name="phone" onChange={props.handleChange}  />
            </div>
          </div>



          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      
    
  )
}

export default SignUpform
