import React from 'react';
import Button from '../../components/button/Button';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePost } from '../../reduxSlices/homeSlice/homeSlice';
import { useHistory } from 'react-router-dom';
import { SITE_URL } from '../../constants/constants';
import './PagesComponent.css';

function FeaturedPost () {

    const dispatch = useDispatch();
    const post = useSelector((state) => state.home.single_post );
    const history = useHistory();

    useEffect(()=>{
        dispatch(fetchSinglePost());
    }, [dispatch])

    function setDate(date){
        const local = new Date(date);
        const date_string = local.toISOString().slice(0, 10);
        return date_string;
    }

    const clickHandler = (product_id) => {
        let path = `/product/${product_id}`; 
        history.push(path);
    }

    return (
        <React.Fragment>
        {post && post.map((item)=>{
            const url = SITE_URL + `${item.images[0].src}`;
            return(        
                <div className="card mb-4" key="FeaturedPost">
                    <img className="card-img-top" src={url} alt={item.short_description} />
                    <div className="card-body card-body-featured">
                        <div className="small text-muted">{setDate(item.created_at)}</div>
                        <h2 className="card-title">{item.name}</h2>
                        <p className="card-text">{item.description}</p>
                        <Button buttonClick={() => clickHandler(item.product_id) }>Read More...</Button>
                    </div>
                </div>
                )
            })
        }
        </React.Fragment>
    )
}

export default FeaturedPost;