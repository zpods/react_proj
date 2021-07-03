import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'qs';

export const sendCartToBackend = createAsyncThunk(
  'cart/sendCartToBackend',
  async ({cart, token},  thunkAPI) => {
    try{
      const response = await axios(       
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' +token
          },
          data: qs.stringify({
            cart: cart
          }),
          url : 'http://localhost:8000/api/cart',
        }
      )
      return response.data;
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  });

  export const getCartFromBackend = createAsyncThunk(
    'cart/getCartFromBackend',
    async (token,  thunkAPI) => {
      try{
        const response = await axios(       
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' +token
            },
            url : 'http://localhost:8000/api/cart',
          }
        )
        return response.data;
      }catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    });


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart_items: [],
    cart_items_from_backend: [],
    total_price: 0,
    total_ordered: 0,
  },
  reducers: {
    addItemAction: (state, action) => {
      const new_item = action.payload;
      const found = state.cart_items.find((item) => {
        if(item.product_id === new_item.product_id){
          return true;
        }else{
          return false;
        }
      })
      if(found){
        found.ordered++;
        state.total_price = state.total_price + found.price;
        state.total_ordered = state.total_ordered + 1;
      }else{
        state.cart_items.push({...new_item, ordered: 1});
        state.total_price = state.total_price + new_item.price;
        state.total_ordered = state.total_ordered + 1;
      }
    },
    calculateCart: (state, action) => {
      const backend_items = action.payload;
      backend_items.map((item) => {
          const new_item = item;
          const found = state.cart_items.find((item) => {
              if(item.product_id === new_item.product_id){
                return true;
              }else{
                return false;
              }
          })
          if(found){
              found.ordered++;
              state.total_price = state.total_price + found.price;
              state.total_ordered = state.total_ordered + 1;
          }else{
              state.cart_items.push({...new_item, ordered: 1});
              state.total_price = state.total_price + new_item.price;
              state.total_ordered = state.total_ordered + 1;
          }
          return  state.cart_items;
      })
  },
  clearCart: (state) => {
    state.cart_items = [];
    state.total_price  = 0;
    state.total_ordered = 0;
  },
  removeItemAction: (state, action) =>  {
    const item_removed = action.payload;
    const found = state.cart_items.find((item) => {
      if(item.product_id === item_removed.product_id){
        return true;
      }else{
        return false;
      }
    })
    if(found){
      if(found.ordered === 1){
        const index = state.cart_items.indexOf(found);
        state.cart_items.splice(index, 1);
      }else if(found.ordered > 1){
        found.ordered--;
      }   
      state.total_price = state.total_price - item_removed.price;
      state.total_ordered = state.total_ordered - 1;
    }
  },
},
  extraReducers: (builder) => {
    builder
    .addCase(sendCartToBackend.fulfilled, (state,action) => {        
       state.response_message = 'Cart is saved in backend';
    })
    .addCase(sendCartToBackend.rejected, (state, action) => {
      state.error = 'Cart not sent to backend';
      state.loading = "error";
    })
    .addCase(sendCartToBackend.pending, (state, action) => {
       state.loading = "loading";
     })
     .addCase(getCartFromBackend.fulfilled, (state,action) => {    
      state.cart_items_from_backend = action.payload.cart_products;
    })
    .addCase(getCartFromBackend.rejected, (state, action) => {
      state.error = 'Cart not received from backend';
      state.loading = "error";
    })
    .addCase(getCartFromBackend.pending, (state, action) => {
        state.loading = "loading";
    })
  },
  

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },

});

// Action creators are generated for each case reducer function
export const  cartActions  = cartSlice.actions;

export default cartSlice.reducer;