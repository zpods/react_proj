import React,  { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ShopNavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Input,
  Container
} from 'reactstrap';
import LogoutUser from '../../logoutUser/LogoutUser';
import { searchProducts } from '../../../reduxSlices/searchSlice/searchSlice';

import Cart from '../../cart/Cart';


function  ShopNavbar () {

  const dispatch = useDispatch();

  const history = useHistory();
  const show_login = useSelector((state) => state.forms.login)
  const token = useSelector((state) => state.forms.token)
  const [isOpen, toggleOpen] = useState(false);
  const [searchValue, setSearchValue ] = useState(null);
 

  const toggle = () => {
    toggleOpen(!isOpen);    
  }

  const redirect = (name) => {
    if (name && name.length >= 3) {
      dispatch(searchProducts(name));
      let path = `/products/${name}`; 
      history.push(path);
    }
  }
  
  const clickHandler = () => {
    redirect(searchValue);
  }

  const onChangeHandler = (e) => {
    if(e.target){
      const name  = e.target.value;
      setSearchValue( name);
    }else{
      return;
    }
  }

  return (
    <div>
      <Navbar color="dark" light expand="md" >
        <Container className="cont-position">  
          <NavbarBrand className="d-sm-none d-none d-md-block" href="/">SomeShop</NavbarBrand>                    
          <NavbarToggler className="navbar-togg" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop">Shop</NavLink>
              </NavItem>
              { 
                !show_login &&
                <React.Fragment>
                  <NavItem>
                    <NavLink href="/login">Login</NavLink>
                  </NavItem>        
                  <NavItem>
                    <NavLink href="/register">Register</NavLink>
                  </NavItem>
                </React.Fragment>
              }
              {
                show_login &&
                <NavItem>
                  <NavLink><LogoutUser className="logout" token={token}>Logout</LogoutUser></NavLink>
                </NavItem>  
              }              
            </Nav>
            </Collapse>                         
            <NavbarText onClick={() => clickHandler()} className="d-sm-none d-none d-md-block">Search</NavbarText>
            <Input onChange={(e) => onChangeHandler(e)}  type="search"  className="shop-search d-sm-none d-none d-md-block"  placeholder="At least 3 characters"/>
            <Cart className="cart-pos"></Cart>               
        </Container>          
      </Navbar>
    </div>
  );

}

export default ShopNavbar;