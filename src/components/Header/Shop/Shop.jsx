import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart,deleteShoppingCart } from '../../../assets/utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';

import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products ,setData]= useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setData(data))
    },[])

    useEffect(()=>{
        // console.log('products',products)
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step 1 : get id of the addedProduct
        for(const id in storedCart){
            //step.2 get  product from products state by using id;
            const addedProduct = products.find(product =>product.id ===id)
            //step 3: add quantity
            if(addedProduct){
                const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //step 4: add the added product to the saved cart
            saveCart.push(addedProduct)
            }
            
            // console.log(addedProduct)
            
        }
        //step 5: set the cart
        setCart(saveCart);
    },[products])

    const handleButton =(product)=>{
        let newArray = [];
        const exists =cart.find(pd => pd.id ===product.id);
        if(!exists){
            product.quantity = 1;
            newArray = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const reamining =cart.filter(pd =>pd.id !==product.id)
            newArray = [...reamining,exists]
        }
        // const newArray = [...cart,product]
        //if product doesn't exit in the cart ,then set quantity =1
        //if exit update quantity by 1
        setCart(newArray)
        addToDb(product.id)
    }

    const handleClearCart =()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div >
                <h1>Products Coming Hear : {products.length}</h1>
                <div className="product-container">
                {
                    products.map((product) => <Product 
                    key ={product.id}
                    product ={product}
                    handleButton ={handleButton} />)
                }

                </div>
            </div>
            <div className="card-container">
                <Cart cart = {cart}
                handleClearCart={handleClearCart}
                ><Link to='/order'><button>Review Order</button></Link> </Cart>
               
            </div>
            
        </div>
    );
};

export default Shop;