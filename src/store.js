import { configureStore } from '@reduxjs/toolkit';
import shopReducer  from './reduxSlices/shopSlice/shopSlice';
import cartReducer  from './reduxSlices/cartSlice/cartSlice';
import loginReducer  from './reduxSlices/loginSlice/loginSlice';
import registerReducer  from './reduxSlices/registerSlice/registerSlice';

export default configureStore({
  reducer: { register: registerReducer, login: loginReducer, shop: shopReducer, cart: cartReducer  },
})