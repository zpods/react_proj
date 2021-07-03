import React from 'react';
import Product from '../product/Product';
import { Row, Col } from 'reactstrap';
import './Category.css';

function Category (props) {
    const products = props.products;
    const cat_name = props.cat_name;
    let i = 0;
    let z = 0; 

    const products_list = products.map((product) => {
        return (
            <Col lg={2} md={3} sm={6} className="cat-row" key={'prod_' + i++}>
                <Product
                    product = {product}
                >
                </Product>
                <hr></hr>
            </Col>                        
        )       
    })
    return(
        <Row className="cat-div" key={'cat_' + z++}>
            <Col md={12} sm={12}><h2 className="cat_name" title="category">{cat_name}</h2>   </Col>       
            {products_list}
            <hr></hr>
        </Row>
    )
}

export default Category;