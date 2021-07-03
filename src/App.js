import React from 'react';
import ShopNavBar from '../src/components/header/navbar/ShopNavBar';
import RoutesComponent from './routes/RoutesComponent';
import Message from './components/message/Message';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <ShopNavBar></ShopNavBar>        
      <Message></Message>                                
      <RoutesComponent></RoutesComponent>      
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
