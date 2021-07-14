import React from 'react';
import Image from '../image/Image';
import { Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../reduxSlices/productDetailsSlice/productDetailsSlice';
import './productDetails.css';



function ProductDetails (props) {
    const dispatch = useDispatch();
    const found = useSelector( (state) => state.productDetails.product_details);
    const product_id = props.match.params.product_id;
    const images = found["images"];

    React.useEffect(() => {
        dispatch(fetchProductDetails({product_id}));
    }, [dispatch, product_id]);

    function showImages (images) {
        if(images){
            const template = [];
            for(const [key ,value] of Object.entries(images)) {
                template.push(
                    <Col md={4} key={key}>
                        <div className="details-img">
                        <Image src={value.src} alt={value.short_description} className="image-details"></Image>
                        </div>
                    </Col>)
            };
            return template; 
        }else{
            return null;
        }       
    }
    

    return (
        <Container>
            <Row>
                <React.Fragment>
                    <Col md={12}><h1 className="details-title">{found && found.name}</h1></Col>
                        {showImages(images)}
                    <Col md={12}><p className="details-description">{found && found.description}</p></Col>
                </React.Fragment>
            </Row>
            
        </Container>
    )
}

export default ProductDetails;