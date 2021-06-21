import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart_items: [],
    total_price: 0,
    total_ordered: 0,
  },
  reducers: {
    addItemAction: (state, action) => {
      console.log(action);
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
  clearCart: (state) => {
    state.cart_items = [];
    state.total_price  = null;
    state.total_ordered = null;
  },
  removeItemAction: (state, action) =>  {
    console.log(action);
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
  },
});

// Action creators are generated for each case reducer function
export const  cartActions  = cartSlice.actions;

export default cartSlice.reducer;