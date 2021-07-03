import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import ExpandedCart from '../expandedCart/ExpandedCart';
import { getCartFromBackend } from '../../reduxSlices/cartSlice/cartSlice';
import { cartActions } from '../../reduxSlices/cartSlice/cartSlice';
import './Cart.css';

function Cart () {

    const dispatch = useDispatch();
    const [ showCart, setShowCart ] = useState(false);

    const cartTotalPrice = useSelector( (state) => state.cart.total_price );
    const cartTotalOrdered = useSelector( (state) => state.cart.total_ordered );
    const token = useSelector( (state) => state.forms.token );
    const logged_in = useSelector( (state) => state.forms.login );
    const cart_items_from_backend = useSelector( (state) => state.cart.cart_items_from_backend );

    React.useEffect(() => {
        if(logged_in){
            dispatch(getCartFromBackend(token));
        }        
     }, [dispatch, logged_in, token]); 

     React.useEffect(() => {       
            if(cart_items_from_backend){
                dispatch(cartActions.calculateCart(cart_items_from_backend))
            } 
               
     }, [dispatch,cart_items_from_backend]); 

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    return (
       
        <div className="cart-pos">            
            <div onClick={ toggleCart } className="cart-div">
                <p className="cart-name">Cart</p>
                <p className="total-ordered_quantity">{cartTotalOrdered}</p>
            </div>
            <div className="parent-exp-cart">
            {  showCart && <ExpandedCart  cartTotalPrice={cartTotalPrice}></ExpandedCart> }
            </div>          
        </div>
        
    )
}

export default Cart;