import { configureStore } from '@reduxjs/toolkit';
import shopReducer  from './reduxSlices/shopSlice/shopSlice';
import cartReducer  from './reduxSlices/cartSlice/cartSlice';
import formReducer  from './reduxSlices/formSlice/formSlice';
import messageReducer  from './reduxSlices/messageSlice/messageSlice';
import homeReducer  from './reduxSlices/homeSlice/homeSlice';
import productDetailsReducer from './reduxSlices/productDetailsSlice/productDetailsSlice';
import searchReducer  from './reduxSlices/searchSlice/searchSlice';

export default configureStore({
  reducer: { 
    search: searchReducer,
    productDetails: productDetailsReducer,
    home: homeReducer,
    message: messageReducer,  
    forms: formReducer, 
    shop: shopReducer, 
    cart: cartReducer  
  },
})