import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div >
           <Link to="/shop">Shop</Link>
           <Link to="/order">Order</Link>
           <Link to="/inventory">Inventory</Link>
           <Link to="/login">Login</Link>
           </div>
        </nav>
    );
};

const obj = {name :'jack',age:27}
const a= 'name' in obj;
console.log(a)

export default Header;