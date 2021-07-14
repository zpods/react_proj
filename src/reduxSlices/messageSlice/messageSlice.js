import { createSlice } from "@reduxjs/toolkit";

  
const  messageSlice = createSlice({
    name: "products",
    initialState: {
       message: '',
       show_message: false,
       type_message: '',
    },
   reducers: {
      message: (state, action) => {
          state.message = action.payload.message;
          state.show_message = action.payload.show_message;
          state.type_message = action.payload.type_message;
      }
   },
   extraReducers: {
   },
})

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;