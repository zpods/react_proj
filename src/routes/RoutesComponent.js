import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Shop from '../components/shop/Shop';
import LoginForm from '../components/loginForm/LoginForm';
import RegisterForm from '../components/registerForm/RegisterForm';
import ProductDetails from '../components/productDetails/productDetails';
import Search from '../components/search/Search';

function RoutesComponent(){ 

  return (
    
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />     
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={LoginForm} /> 
          <Route path="/register" component={RegisterForm} />  
          <Route path="/product/:product_id" component={ProductDetails} />
          <Route path="/products/:name" component={Search} />  
          <Route path="/404" component={NoMatch} /> 
          <Redirect to="/404"></Redirect> 
        </Switch>
          
    
  );  
    
}

export default RoutesComponent;