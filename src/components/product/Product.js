import React from 'react';
import Image from '../image/Image';
import { useDispatch } from 'react-redux'
import { cartActions } from '../../reduxSlices/cartSlice/cartSlice';
import { useHistory } from 'react-router-dom';
import './Product.css';

function Product (props) {

    const dispatch = useDispatch();

    const name = props.product.name;
    const short_desc = props.product.short_description;
    const image_src = props.product.images[0].src;
    const image_alt = props.product.images[0].description;
    const product = props.product;
    const history = useHistory();
    const product_id = props.product.product_id;


    const productDetailskHandler = (product_id) => {
        let path = `/product/${product_id}`; 
        history.push(path);
    }

    const addItemToCartHandler = () => {
        dispatch(cartActions.addItemAction(product));
   };

   

    return(
        <div  className="product-div">
            <p onClick={() => productDetailskHandler(product_id)} className="product-title" title="product name">{name}</p>
            <div className="product-sub-div">
                <Image src={image_src} alt={image_alt}></Image>               
            </div>
            <div className="button-text-parent">
               <div className="text-div"><p onClick={() => productDetailskHandler(product_id)} className="product-desc">{short_desc}</p></div> 
                
                    <div className="button-div"><button className="button" onClick={addItemToCartHandler}>Add To Cart</button></div>
                      
            </div>
        </div>
    )
}

export default Product;