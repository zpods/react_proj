import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../reduxSlices/cartSlice/cartSlice';
import { Row, Col } from 'reactstrap';
import Image from '../image/Image';
import './ExpandedCart.css';

function ExpandedCart (props) {

    const dispatch = useDispatch();

    const cart = props.cart;
    const cartTotalPrice = props.cartTotalPrice;
    const cartTotalOrdered = useSelector((state)=>state.cart.total_ordered);

    function clearCartHandler(){
        dispatch(cartActions.clearCart());
    }

    function removeItemHandler(item){
        dispatch(cartActions.removeItemAction(item));
    }
    function addItemHandler(item){
        dispatch(cartActions.addItemAction(item));
    }

    function sendCartDataToBackend(){
        //dispatch();
    }

    console.log(cart);
    return (
        <div  className="expanded-cart"> 
            <Row xs="12" className="cart-padding cart-font">
                <Col xs="4">Product</Col>
                <Col xs="4">Image</Col>
                <Col xs="4">Price</Col>
            </Row> 
            <div className="hr-cart"></div>   
                { 
                    cart.map((item) => {
                        const image_src = item.images[0].src;
                        const image_desc = item.images[0].description;
                        return (
                        <div>
                            <Row xs="12" className="cart-padding">
                                <Col xs="4" className="cart-font">{item.name}</Col>
                                <Col xs="4"><Image src={image_src} alt={image_desc}></Image></Col>
                                <Col xs="4">{item.price}</Col>
                            </Row>
                            <Row xs="12">
                                <Col xs="6" onClick={() => removeItemHandler(item)} className="center-text cursor-poi">Remove One</Col>
                                <Col xs="6" onClick={() => addItemHandler(item)} className="center-text cursor-poi">Add One</Col>
                            </Row> 
                            <div className="hr-cart"></div>                              
                        </div>
                        );
                    })
                }
            <Row xs="12" className="cart-padding">
                <Col xs="6" className="center-text">Qunatity: {cartTotalOrdered}</Col>
                <Col xs="6" className="center-text">Total Price: {cartTotalPrice}</Col>
            </Row>
            <div className="hr-cart"></div>
            <div className="hr-cart"></div>
            <Row xs="12" className="cart-padding">
                <Col xs="6" className="center-text"><button onClick={sendCartDataToBackend} className="button cart-btn">Checkout</button></Col>
                <Col xs="6" className="center-text"><button onClick={clearCartHandler} className="button cart-btn">Clear Cart</button></Col>
            </Row>        
        </div>
    );
}

export default ExpandedCart;