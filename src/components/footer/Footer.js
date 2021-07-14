import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <React.Fragment>
            
<footer className="page-footer font-small cyan darken-3">

  
  <div className="container">

    
    <div className="row">

       
      <div className="col-md-6 py-5">
        <div className="mb-5 flex-center">

        
          <a className="fb-ic" href="https://facebook.com">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i> 
          </a>
          
          <a className="tw-ic" href="https://twitter.com">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a className="gplus-ic" href="https://google.com">
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a className="li-ic" href="https://linkedin.com">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a className="ins-ic" href="https://instagram.com">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a className="pin-ic" href="https://instagram.com">
            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
      <div className="col-md-6 py-5">
        <h5 className="text-uppercase font-weight-bold">Footer text</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
            repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
            harum esse fugiat. Itaque, culpa?</p>

        </div>

        
      
       

    </div>
    

  </div>
  

  
  <div className="footer-copyright text-center py-3">© 2021 Copyright:
    <a href="/"> Something</a>
  </div>
  

</footer>

        </React.Fragment>

    );
}

export default Footer;