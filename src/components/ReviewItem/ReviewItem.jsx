import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {shipping,price,img,name,id} = product
    return (
        <div className='review-item'>
         
                <img src={img} alt="" />
            
            <div className='review-details'>
            <h6 className='product-title'>{name}</h6>
            <p>Price: <span className='orange-text'>$ {price}</span></p>
            <p>Order Quantity : <span className='orange-text'>{shipping}</span> </p>
            </div> 
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='btn-icon' icon={faTrashAlt} /></button>
           
        </div>
    );
};

export default ReviewItem;