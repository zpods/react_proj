import React from 'react';
import Product from '../product/Product';
import { Container, Row, Col } from 'reactstrap';
import './Category.css';

function Category (props) {
    const products = props.products;
    const cat_name = props.cat_name;
    // const images = 
    // products.products.images;
    const products_list = products.map((product) => {
        return (
            <Col md={2} className="cat-row ">
                <Product
                    product = {product}
                >
                </Product>
<hr></hr>
            </Col>
                  
                            
        )
    })
    return(
        <Row className="cat-div">
            <Col md={12}><h2 className="cat_name" title="category">{cat_name}</h2>   </Col>       
            {products_list}
            <hr></hr>
        </Row>
    )
}

export default Category;