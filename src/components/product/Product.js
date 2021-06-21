import React, { useEffect, useCallback } from 'react';
import Image from '../image/Image';
import Button from '../button/Button';
import { useDispatch } from 'react-redux'
import { cartActions } from '../../reduxSlices/cartSlice/cartSlice';
import './Product.css';

function Product (props) {

    const dispatch = useDispatch();

    const name = props.product.name;
    const short_desc = props.product.short_description;
    const image_src = props.product.images[0].src;
    const image_alt = props.product.images[0].description;
    const product = props.product;

    const addItemToCartHandler = (e) => {
        dispatch(cartActions.addItemAction(product));
   };

    return(
        <div  className="product-div">
            <p className="product-title" title="product name">{name}</p>
            <Image src={image_src} alt={image_alt}></Image>
            <p className="product-desc">{short_desc}</p>
            <button className="button" onClick={addItemToCartHandler}>Add To Cart</button>      
        </div>
    )
}

export default Product;