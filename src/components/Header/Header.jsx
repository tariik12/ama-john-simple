import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Header = () => {
    const {user, LogOut} = useContext(AuthContext)

    const handleLogOut = (event) =>{
        LogOut()
        .then(result =>{

        })
        .catch(error =>{
            console.error(error.message)
        })
    }
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div >
           <Link to="/">Shop</Link>
           <Link to="/order">Order</Link>
           <Link to="/inventory">Inventory</Link>
           <Link to="/login">Login</Link>
           <Link to="/singUp">Sing Up</Link>
           {user && <span className='text-white'>welcome {user.email} <button onClick={handleLogOut}>Log Out</button></span>}
           </div>
        </nav>
    );
};


export default Header;