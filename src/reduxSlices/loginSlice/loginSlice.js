import { createSlice,createAsyncThunk,} from "@reduxjs/toolkit";
import axios from 'axios';
import qs from 'qs';


export const signupUser = createAsyncThunk(
  'login/signupUser',
  async ({ email, password }, thunkAPI) => {

    try{
      const response = await axios(       
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: qs.stringify({
            'email': email, 'password': password
          }),
          url : 'http://localhost:8000/api/login',
        }
      );
      //console.log(res.data);
      return response.data;
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  });

  // export const signupUser1 = createAsyncThunk(
  //   'form/signupUser1',
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


  
const  loginSlice = createSlice({
    name: "login",
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
      .addCase(signupUser.fulfilled, (state,action) => {
         state.login = true;
         state.loading = "loaded";
         state.token = action.payload.token;
         state.user_id = action.payload.user;
      })
      .addCase(signupUser.rejected, (state, action) => {
        console.log(action);
        state.error = action.payload.error;
        state.loading = "error";
     })
     .addCase(signupUser.pending, (state, action) => {
       state.loading = "loading";
     })
   },
})

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;