import { createSlice,createAsyncThunk,} from "@reduxjs/toolkit";
import axios from 'axios';
import qs from 'qs';


export const registerUser = createAsyncThunk(
  'register/registerUser',
  async ({ email, password, password_confirmation, name }, thunkAPI) => {

    try{
      const response = await axios(       
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: qs.stringify({
            'email': email, 'password': password,
            'password_confirmation': password_confirmation, 'name': name, 
          }),
          url : 'http://localhost:8000/api/register',
        }
      );
      //console.log(res.data);
      return response.data;
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  });

  // export const registerUser1 = createAsyncThunk(
  //   'form/registerUser1',
  //   async ({ email, password }) => {
  // dd
     
  //       const response = await axios(       
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded'
  //           },
  //           data: qs.stringify({
  //             'email': email, 'password': password
  //           }),
  //           url : 'http://localhost:8000/api/login',
  //         }
  //       );
  //       //console.log(res.data);
  //       return response.data;
     
  //   });


  
const  registerSlice = createSlice({
    name: "register",
    initialState: {
      user_id: null,
      login: false,
      token: null,
      cooki: null,
      error: "",
      loading: "",
    },
   reducers: {
   },
   extraReducers: (builder) => {
      builder
      .addCase(registerUser.fulfilled, (state,action) => {
         state.login = true;
         state.loading = "loaded";
         state.token = action.payload.token;
         state.user_id = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log(action);
        state.error = action.payload.error;
        state.loading = "error";
     })
     .addCase(registerUser.pending, (state, action) => {
       state.loading = "loading";
     })
   },
})

export const registerActions = registerSlice.actions;

export default registerSlice.reducer;