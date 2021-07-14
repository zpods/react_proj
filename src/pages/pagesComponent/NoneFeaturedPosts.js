import React from 'react';
import Button from '../../components/button/Button';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../reduxSlices/homeSlice/homeSlice';
import { useHistory } from 'react-router-dom';
import { SITE_URL } from '../../constants/constants';
import './PagesComponent.css';

function NoneFeaturedBlogPost () {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.home.posts );
    const history = useHistory();

    const clickHandler = (product_id) => {
        let path = `/product/${product_id}`; 
        history.push(path);
    }

    useEffect(()=>{
        dispatch(fetchPosts());
    }, [dispatch])

    function setDate(date){
        const local = new Date(date);
        const date_string = local.toISOString().slice(0, 10);
        return date_string;
    }

    return (
        <React.Fragment>
            <div className="row">                
                    {posts && posts.map((item)=>{
                        const url = SITE_URL + `${item.images[0].src}`;
                        return (
                            <div className="col-lg-6" key={`nonfeatured_${item.product_id}`}>
                                <div className=" mb-4">
                                    <img className="card-img-top" src={url} alt={item.short_description} />
                                    <div className="card-body card-body-height">
                                        <div className="small text-muted">{setDate(item.created_at)}</div>
                                        <h2 className="card-title h4">{item.name}</h2>
                                        <div className="button-none-featured-parent"> 
                                        <p className="card-text">{item.description}</p>
                                            <div className="button-none-featured">
                                                <Button buttonClick={() => clickHandler(item.product_id) }>Read More ...</Button>
                                            </div>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>                                      
                        )                                    
                    })}               
            </div>
        </React.Fragment>
    )
}

export default NoneFeaturedBlogPost;