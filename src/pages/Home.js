import React from 'react';
import CategoriesWidget from './pagesComponent/CategoriesWidget';
import FeaturedPost from './pagesComponent/FeaturedPost';
import NoneFeaturedBlogPost from './pagesComponent/NoneFeaturedPosts';
import SideWidget from './pagesComponent/SideWidget';
import HeaderHomeComponent from './pagesComponent/HeaderHomeComponent';


const Home = () => {

  

  return (
    <React.Fragment>
      <HeaderHomeComponent></HeaderHomeComponent>
        <div className="container">
            <div className="row">    
                <div className="col-lg-8">
                    <FeaturedPost></FeaturedPost>                    
                    <NoneFeaturedBlogPost></NoneFeaturedBlogPost>
                </div>    
                <div className="col-lg-4">
                    <CategoriesWidget></CategoriesWidget>    
                    <SideWidget></SideWidget>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home