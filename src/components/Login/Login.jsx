import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <div className='box-shadow'>
 <div className='form-container'>
            <h4 className='form-title' >Login</h4>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' id='' required></input>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='' required></input>
            </div>
            <input type="submit" className='btn-submit' value='Login' />
            <p className='para' > <small>New to Ema-john? <Link to='/singUp'>Create New Account</Link></small></p>
        </div>
       </div>
    );
};

export default Login;