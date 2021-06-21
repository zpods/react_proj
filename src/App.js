import React from 'react';
import ShopNavBar from '../src/components/header/navbar/ShopNavBar';
import RoutesComponent from './routes/RoutesComponent';
import Message from './components/message/Message';
import { Fragment } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { hideErrorMessage } from './actions/shopActions';

//import { showMessage } from './actions/shopActions';

function App() {

  const message = useSelector((state) => state.shop.error );
  const hideMessage = useSelector((state) => state.shop.hideMessage );
  const dispatch = useDispatch();



  return (
    <Fragment>
      { hideErrorMessage(dispatch) }
      { !hideMessage && message && <Message message={message}></Message>}
      <ShopNavBar></ShopNavBar>
      <RoutesComponent></RoutesComponent>
    </Fragment>
  );
}

export default App;
