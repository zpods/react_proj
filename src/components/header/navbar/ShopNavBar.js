import React,  { useState }  from 'react';
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
import Cart from '../../cart/Cart';



function  ShopNavbar () {

  const [isOpen, toggleOpen] = useState(false);

  const toggle = () => {
    toggleOpen(!isOpen);    
  }

  return (
    <div>
      <Navbar color="dark" light expand="md" >
        <div className="container">
          <NavbarBrand href="/">SomeShop</NavbarBrand>
          <NavbarToggler onClick={toggle} />
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
              <NavItem>
              <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Search</NavbarText>
            <Input type="search" className="shop-search"  placeholder="Search"/>
          </Collapse>
          <Cart></Cart>
        </div>          
      </Navbar>
    </div>
  );

}

export default ShopNavbar;