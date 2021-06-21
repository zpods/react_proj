import React from 'react';
import Message from '../message/Message';
import Category from '../category/Category';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../../reduxSlices/shopSlice/shopSlice';
import { Container, Row, Col } from 'reactstrap';
import './Shop.css';


function Shop () {

    const dispatch = useDispatch();
    const categories  = useSelector((state) => state.shop.products);
    const message = useSelector((state) => state.shop.error); 

    React.useEffect(() => {
       dispatch(fetchProducts());
    }, [dispatch]); 

    
    const categories_list = categories.map((category) => {
        return (            
                <Row>
                <Category 
                products = {category.products}
                cat_name = {category.name}
                >
                </Category>    
                </Row>        
        )
          
    })


    return(
        <Container>
            {categories_list}
        </Container>
    )
}
export default Shop;