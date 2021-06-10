import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'
import NoMatch from '../pages/NoMatch'
// import ShopContainer from '../components/shopContainer/ShopContainer';
// import LoginForm from '../components/form/LoginForm';
// import RegisterForm from '../components/form/RegisterForm';
// import ProductDetails from '../components/productDetails/ProductDetails';

function RoutesComponent(){ 
  return (
    <BrowserRouter>
      <Switch>     
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />     
        {/* <Route path="/shop" component={ShopContainer} /> */}
        {/* <Route path="/login" component={LoginForm} /> 
        <Route path="/register" component={RegisterForm} /> 
        <Route path="/product/:product_id" component={ProductDetails} />  */}
        <Route component={NoMatch} />     
      </Switch>
    </BrowserRouter>
    
  );  
    
}

export default RoutesComponent;