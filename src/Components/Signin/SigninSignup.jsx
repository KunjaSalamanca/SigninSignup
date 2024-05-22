/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import './SigninSignup.css';
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";

const SigninSignup = () => {

  // eslint-disable-next-line no-unused-vars
  const [action, setAction] = useState('');

  const registerLink = () => {
    setAction(' active');
    
  }

  const signinLink = () => {
    setAction(' ');
    
  }


  return (
    <div className={'wrapper${action}'}>
        <div className='form-box Sign-in'>
         <form action=''>
            <h1>Sign-in</h1>
            <div className='input-box'>
                <input type='text'
                placeholder='Username' required />
                <FaUserCircle className='icon' />
            </div>
            <div className='input-box'>
                <input type='password'
                placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                    <a href='#'>Forgot password?</a>
                    
            </div>

            <button type='Submit'>Sign-in</button>

            <div className='register-link'>
                <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a>
                </p>
            </div>
         </form>
         </div>

        <div className='form-box Sign-up'>
         <form action=''>
            <h1>Sign-up</h1>
            <div className='input-box'>
                <input type='text'
                placeholder='Username' required />
                <FaUserCircle className='icon' />
            </div>
            <div className='input-box'>
                <input type='email'
                placeholder='Email' required />
                <FaEnvelope className='icon' />
            </div>
            <div className='input-box'>
                <input type='password'
                placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
                    <label><input type='checkbox' />Agree to the Terms & Conditions</label>
            </div>

            <button type='Submit'>Sign-up</button>

            <div className='register-link'>
                <p>Already have an account? <a href='#' onClick={signinLink}>Sign-in</a>
                </p>
            </div>
         </form>
         </div>

       
    </div>
  );
};

export default SigninSignup;