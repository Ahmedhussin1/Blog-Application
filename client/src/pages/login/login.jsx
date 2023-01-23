import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'
function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="someone@somewhere.com"></input>
        <label>password</label>
        <input type="password"></input>
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'><Link className='link' to='/register'>Register</Link></button>
    </div>
  );
}

export default Login