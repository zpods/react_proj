import React from 'react';
import Category from '../category/Category';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../../reduxSlices/shopSlice/shopSlice';
import { Container, Row } from 'reactstrap';
import { messageActions } from '../../reduxSlices/messageSlice/messageSlice';
import './Shop.css';


function Shop () {

    const dispatch = useDispatch();
    const categories  = useSelector((state) => state.shop.products);
    let a = 0;
    
    React.useEffect(() => {
       dispatch(fetchProducts());
    }, [dispatch]); 

    const message_shop = useSelector((state)=>state.shop.error); 

    React.useEffect(() => {
        if(message_shop){
            dispatch(messageActions.message({
                message: message_shop,
                show_message: true, 
                type_message: 'error'
            }))
        }               
    }, [dispatch, message_shop]);
    
    
    const categories_list = categories.map((category) => {
        return (            
            <Row key={'shop_' + a++}>
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