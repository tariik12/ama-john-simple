import React from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className='box-shadow'>
            <div className='form-container'>
            <h4 className='form-title' >Sing Up</h4>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' id='' required></input>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='' required></input>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Confirm Password</label>
                <input type='password' name='confirm' id='' required></input>
            </div>
            <input type="submit" className='btn-submit' value='Login' />
            <p className='para'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
        </div>

        </div>
    );
};

export default SingUp;