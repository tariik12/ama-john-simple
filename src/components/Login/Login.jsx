import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const {singINEmail} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleSingIn = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        singINEmail(email,password)
        .then(result =>{
            const loggedUser = result.user;
           
            form.reset()
            navigate(from, {replace: true} )
        })
        .catch(error =>{
          setError(error.message)
        })
    }
    return (
       <div className='box-shadow'>
 <div className='form-container'>
            <h4 className='form-title' >Login</h4>
            <form onSubmit={handleSingIn}>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email'  required></input>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type={show ? 'text' : 'password'} name='password'  required></input>
                <p onClick={() => setShow
                (!show)}><small>
                    {
                        show ? <span>Hide Password</span>: <span>Show Password</span>
                    }
                    </small></p>
            </div>
            <input type="submit" className='btn-submit' value='Login' />
            </form>
            <p className='para' > <small>New to Ema-john? <Link to='/singUp'>Create New Account</Link></small></p>
            <p>{error}</p>
        </div>
       </div>
    );
};

export default Login;