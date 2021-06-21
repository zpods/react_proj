import React from 'react';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import ExpandedCart from '../expandedCart/ExpandedCart';

import './Cart.css';

function Cart () {

    const [ showCart, setShowCart ] = useState(false);

    const cartTotalItems = useSelector((state) => state.cart.cart_items);
    const cartTotalPrice = useSelector((state) => state.cart.total_price);
    const cartTotalOrdered = useSelector((state) => state.cart.total_ordered);


    console.log(cartTotalItems);
    console.log(cartTotalPrice);
    console.log(cartTotalOrdered);


    const toggleCart = () => {
        setShowCart(!showCart)
    }


    return (
       
        <React.Fragment>            
            <div onClick={ toggleCart } className="cart-div">
                <p className="cart-name">Cart</p>
                <p className="total-ordered_quantity">{cartTotalOrdered}</p>
            </div>
            <div className="parent-exp-cart">
            {  showCart && <ExpandedCart cart={cartTotalItems} cartTotalPrice={cartTotalPrice}></ExpandedCart> }
            </div>          
        </React.Fragment>
        
    )
}

export default Cart;