import { getShoppingCart } from "../assets/utilities/fakedb"

const CartProductsLoader = async ()=>{

    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json()
  
    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    // console.log(storedCart)
    const saveCart = []
    for(const id in storedCart){
        const addedProduct = products.find(pd =>pd.id === id );
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
     }
    // //if you need to send two things
    // return [saveCart, products]
    // return {saveCart, cart:saveCart}
    return saveCart;
}

export default CartProductsLoader;