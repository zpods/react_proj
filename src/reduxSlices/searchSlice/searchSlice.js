import { createSlice,createAsyncThunk,} from "@reduxjs/toolkit";
import axios from 'axios';
import { SITE_URL } from '../../constants/constants';
import qs from 'qs';

export const searchProducts = createAsyncThunk(
   "search/searchProducts", async (name, thunkAPI) => {
      try {
         const response = await axios(
            {
               method: 'GET',
               url: SITE_URL + `/api/products/${name}`,
               headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: qs.stringify({
                  'name': name
                }),
            }
         );
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue({ error: error.message });
      }
});


const  searchSlice = createSlice({
    name: "search",
    initialState: {
       searched_products: [],
       loading: '',    },
   reducers: {
   },
   extraReducers: (builder) => {
      builder
      .addCase(searchProducts.fulfilled, (state,action) => {
         state.searched_products = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
         state.error = action.payload.error;
      })
      .addCase(searchProducts.pending, (state, action) => {
         state.loading = 'loading';
      })
   },
})

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;