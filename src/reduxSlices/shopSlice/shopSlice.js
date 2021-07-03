import { createSlice,createAsyncThunk,} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
   "products/fetchProducts", async (_, thunkAPI) => {
      try {
         const response = await axios.get('http://localhost:8000/api/products');
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue({ error: error.message });
      }
});
  
const  shopSlice = createSlice({
    name: "products",
    initialState: {
       products: [],
       error: "",
    },
   reducers: {
      hideMessage: (state, action)=> {
         state.hide_message = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
      .addCase(fetchProducts.fulfilled, (state,action) => {
         state.products = action.payload;
         state.loading = 'loaded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
         state.error = action.payload.error;
         state.loading = 'error';
      })
      .addCase(fetchProducts.pending, (state, action) => {
         state.products = [];
         state.loading = 'loading';
      })
   },
})

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;