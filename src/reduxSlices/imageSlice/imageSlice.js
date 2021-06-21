// import { createSlice,createAsyncThunk,} from "@reduxjs/toolkit";
// import { useSelector } from 'react-redux';
// import axios from 'axios'

// export const fetchImage = createAsyncThunk(
//     "image/fetchImage", async (_, thunkAPI) => {
//       const image_src = useSelector(state.shop.products.products.images[0].src);
//        try {
//           const response = await axios.get(`http://localhost:8000/${image_src}`);
//           return response;
//         } catch (error) {
//            return thunkAPI.rejectWithValue({ error: error.message });
//         }
//   });
  
// //const image_src = useSelector(sate.shop.products.products.images[0].src);

// const  imageSlice = createSlice({
//     name: "image",
//     initialState: {
//        image: [],
//        loading_img: "idle",
//        error_img: "",
//     },
//    reducers: {
//    },
//    extraReducers: (builder) => {
//       builder
//       .addCase(fetchImage.fulfilled, (state,action) => {
//          state.image = action.payload;
//          state.loading_img = 'loaded';
//       })
//       .addCase(fetchImage.rejected, (state, action) => {
//          state.error_img = action.error_img.message;
//          state.loading_img = 'error';
//       })
//       .addCase(fetchImage.pending, (state, action) => {
//          state.image = [];
//          state.loading_img = 'loading';
//       })
//       // [fetchImage.fulfilled]: (state, action) => {
//       //    console.log(action)
//       //    state.products += action.payload;
//       // }
//    },

//    //     builder.addCase(fetchImage.pending, (state) => {
//    //       state.products = [];
//    //         state.loading = "loading";
//    //     });
//    //     builder.addCase(
//    //        fetchImage.fulfilled, (state, { payload }) => {
//    //           console.log(payload);
//    //           state.products = payload;
//    //           state.loading = "loaded";
//    //     });
//    //     builder.addCase(
//    //       fetchImage.rejected,(state, action) => {
//    //          console.log(action);
//    //           state.loading = "error_img";
//    //           state.error = action.error.message;
//    //     });
//    //  }
// })


// export default imageSlice.reducer;