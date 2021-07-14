import { createSlice,createAsyncThunk,} from "@reduxjs/toolkit";
import { SITE_URL } from '../../constants/constants';
import axios from 'axios'

export const fetchPosts = createAsyncThunk(
   "home/fetchPosts", async (_, thunkAPI) => {
      try {
         const response = await axios.get(SITE_URL + '/api/home/none-featured-posts');
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue({ error: error.message });
      }
});

export const fetchSinglePost = createAsyncThunk(
    "home/fetchSinglePost", async (_, thunkAPI) => {
       try {
          const response = await axios.get(SITE_URL + '/api/home/featured-post');
          return response.data;
       } catch (error) {
          return thunkAPI.rejectWithValue({ error: error.message });
       }
 });
  
const  homeSlice = createSlice({
    name: "home",
    initialState: {
       posts: [],
       error: "",
       single_post: null,
    },
   reducers: {
   },
   extraReducers: (builder) => {
      builder
      .addCase(fetchPosts.fulfilled, (state,action) => {
         state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
         state.error = action.payload.error;
      })
      .addCase(fetchPosts.pending, (state, action) => {
         
      })
      .addCase(fetchSinglePost.fulfilled, (state,action) => {
        state.single_post = action.payload;
     })
     .addCase(fetchSinglePost.rejected, (state, action) => {
        state.error = action.payload.error;
     })
     .addCase(fetchSinglePost.pending, (state, action) => {
        
     })
   },
})

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;