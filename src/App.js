import React from 'react';
import ShopNavBar from '../src/components/header/navbar/ShopNavBar';
import RoutesComponent from './routes/RoutesComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <ShopNavBar></ShopNavBar>
      <RoutesComponent></RoutesComponent>
    </Fragment>
  );
}

export default App;
