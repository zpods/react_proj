import { createSlice,createAsyncThunk,} from "@reduxjs/toolkit";
import axios from 'axios';
import { SITE_URL } from '../../constants/constants';

export const fetchProductDetails = createAsyncThunk(
   "productDetails/fetchProductDetails", async (product_id, thunkAPI) => {
      try {
         const response = await axios.get(SITE_URL + '/api/product/' + `${product_id.product_id}`);
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue({ error: error.message });
      }
});
  
const  shopSlice = createSlice({
    name: "productDetails",
    initialState: {
       product_details: [],
       error: "",
       loading: '',
    },
   reducers: {
   },
   extraReducers: (builder) => {
      builder
      .addCase(fetchProductDetails.fulfilled, (state,action) => {
         state.product_details = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
         state.error = action.payload.error;
         state.loading = 'error';
      })
      .addCase(fetchProductDetails.pending, (state, action) => {
         state.product_details = [];
         state.loading = 'loading';
      })
   },
})

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;