import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart, children}) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity ===1;
        // }
        // product.quantity == product.quantity || 0;
        total = total + product.price *product.quantity
        totalShipping = totalShipping + product.shipping 
        quantity = quantity + product.quantity
    }

    const tax = total*7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h6>Grand Total: ${grandTotal}</h6>

                <button onClick={handleClearCart} className='bnt-clear-cart'>Clear Cart
                <FontAwesomeIcon className='btn-icon' icon={faTrashAlt} />
                </button>
                {children}
        </div>
    );
};

export default Cart;