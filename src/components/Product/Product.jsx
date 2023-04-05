import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const {img,name,seller,price,ratings} = props.product;

  const handleButton = props.handleButton;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='name'>
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            </div>

            <div className='seller'>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} start </p>
            </div>
            <button onClick={()=>handleButton(props.product)}> Add To Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>

        </div>
    );
};

export default Product;