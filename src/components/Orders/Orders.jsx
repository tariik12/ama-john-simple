import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import {removeFromDb,deleteShoppingCart} from '../../assets/utilities/fakedb';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    // console.log(cart)
    const handleRemoveFromCart = (id) =>{
        console.log(id)
       const remaining = cart.filter(product =>product.id !== id)
       setCart(remaining)
       removeFromDb(id)
    }

    // console.log(saveCart)
    
    const handleClearCart =() =>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
           <div className='review-container'> 
            <h4>product {cart?.length}</h4>
            {
                cart?.map((product, index) => <ReviewItem 
                    product={product}
                    key={index}
                    handleRemoveFromCart={handleRemoveFromCart}

                    />)
            }
           </div>
           <div className='card-container'>
           <Cart cart={cart} 
           handleClearCart={handleClearCart} > <Link to='/checkout'><button className='btn-proceed'>Proceed Checkout</button></Link></Cart>
            
           </div>
        </div>
    );
};

export default Orders;