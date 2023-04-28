import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SingUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

    const handleSingUp =(event) =>{
        setError('')
        event.preventDefault()
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password !==confirm){
            setError('your confirm password did not match')
            return;
        }
        else if(password.length < 6){
            setError('your password must be 6 character or longer')
            return
        }
       
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className='box-shadow'>
            <div  className='form-container'>
            <h4 className='form-title' >Sing Up</h4>
            <form onSubmit={handleSingUp}>
            <div  className='form-control'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email'  required></input>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password'  required></input>
            </div>
            <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type='password' name='confirm'  required></input>
            </div>
            <input type="submit" className='btn-submit' value='Sing Up' />
            </form>
            <p className='para'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>

        </div>
    );
};

export default SingUp;