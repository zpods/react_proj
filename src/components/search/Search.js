import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Image from '../image/Image';
import './Search.css';

function Search() {

    const search_details = useSelector( (state) => state.search.searched_products);
    let r = 0;

    function showImages (images) {
        if(images){
            let template = [];
            for(const [key ,value] of Object.entries(images)) {
                template.push(
                    <Col md={4}  key={'col-img' + r++}>
                        <div className="details-img" key={'search_' + key}>
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
        <Container  >
            <Row  >
                { search_details && search_details.map( (item) => {
                    let template = [];
                    template.push(<Col md="12" key={'name' + r++}> <h2 className="search-title">{item.name}</h2></Col>);
                    template.push(showImages(item.images));
                    template.push(<Col md="12" key={'desc' + r++}><p >{item.description}</p></Col>);
                    template.push(<div  key={'hr' + r++}className="hr-line"></div>)
                    return (                        
                        template
                    );
                })}
                { (search_details.length === 0 ) && <Col md="12"><p className="search-not-found">Not Found: 404</p></Col>}
            </Row>            
        </Container>
           
    );
}

export default Search;