import React from 'react';
import { Col, Container, Row } from 'reactstrap';


const About = () => (
  <Container>
    <Row>
      <Col md="12">
        <h2 className="about-title">My name is Zbigniew i am php and javascript programmer</h2>
      </Col>
      <Col md="12">
        <p className="about-text">In this project ( shop using react 17 as frontend, for backend laravel 8 and for database Mysql)
          I want to show my skills in building web application as well backend and frontend side. 
        </p>
        <p className="about-text">
          Technology i have been use  programming particular components of application: 
        </p>
        <ul className="about-ul">
          <li>Frontend:</li>
          <ul>
            <li>React: 17.02 base libray for building frontend projects</li>
            <li>Redux: for managing state for whole application.</li>
            <ul>
              <li>In this particular project state was aranging using mainly React Hooks</li>
            </ul>
            <li>React Router: library for routing</li>
            <li>Reactstrap: boostrap library prepared for react</li>
            <li>Axios: for making http request to send and recevie data form backend</li>
            <li>React-final-form: library for development of login and register pages for react</li>
            <li>For development React application were used also addons for browser React Developer Tool and Redux Dev Tools</li>
          </ul>
          <li>Backend:</li>
          <ul>
            <li>Laravel: 8.40 framework for building php backend</li>
            <li>Laravel/Sanctum: for autentication</li>
            <li>For development and preparing MySQL database were used also such libraries as Telescope, Faker</li>
          </ul>
        </ul>
        <p className="about-text">
          React application have following features:
        </p>
          <ul className="about-ul">
            <li>Cart with ability to expand and show image, title, price of product and total price of all products with total amount of 
                mentioned products. Products can be removed using adequate button in cart and all products can be removed from cart using one 
                button. Cart is also send to backend where is preserved in databse.
            </li>
            <li>
              React with appropraite routes managing by react-router 5. 
            </li>
            <li>
              Login, Register, Logout features based on response from backend having ablility to show errors (for example to short password):
             </li>
             <li>
               Shop showing image, description price, name of product and category name together with Add To Cart button.
               Shop has also feature of showing details of product with more pictures and longer description,
             </li>
             <li>
               Home page present also five random product in more details then shop, welcome jumbotron and two widgets showing name 4 random categories
               and some data.
             </li>
             <li>
               Error bar with animations slowly appears frontend showing Login or Register errors.
             </li>
             <li>
               Search ability to search products of specified name in backend.
              </li>
          </ul>
        <p className="about-text">
          Laravel application have following features:
        </p>
        <ul className="about-ul">
          <li>
            Api endpoints with coresponding Controllers sending data to react frontend.
          </li>
          <li>
            Custom Login, Logout, Register action in AuthController used together with Sanctum library.
          </li>
          <li>
            Custom Models Product, User, Category, Image, tied together with ManyToOne an ManyToMany relations.
          </li>
          <li>
            Custom migrations, factories, seeders for Mysql MySQL database using Eloqunet library.
          </li>
          <li>
            Search Controller responding with found products to react frontend.
          </li>
          <li>
            Custom routes for application.
          </li>
        </ul>
      </Col>
    </Row>
  </Container>  
)

export default About