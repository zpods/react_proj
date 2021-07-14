import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { SITE_URL } from '../../constants/constants';
import qs from 'qs';


export const signupUser = createAsyncThunk(
  'forms/signupUser',
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
          url : SITE_URL + '/api/login',
        }
      )
      return response.data;
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  });

  export const registerUser = createAsyncThunk(
    'forms/registerUser',
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
            url : SITE_URL + '/api/register',
          }
        );
        return response.data;
      }catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.errors);
      }
    });
  
  export const logoutUser = createAsyncThunk(
    'forms/logoutUser',
    async ( token, thunkAPI) => {
      try{
        const response = await axios(       
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' +token
            },
            url : SITE_URL + '/api/logout',
          }
        );
        return response.data;
      }catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    });

const  formSlice = createSlice({
    name: "forms",
    initialState: {
      user_id: null,
      login: false,
      token: null,
      error: "",
      loading: "",
      response_message: null,
    },
   reducers: {
     formMessageReset: (state) => {
       state.response_message = '';
       state.error = '';
     }
   },
   extraReducers: (builder) => {
      builder
      .addCase(signupUser.fulfilled, (state,action) => {        
         state.login = true;
         state.loading = "You are logged in to shop";
         state.token = action.payload.token;
         state.user_id = action.payload.user;
         state.response_message = 'You are logged in';
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = 'Wrong password or email';
        state.loading = "error";
        state.response_message = 'Something went wrong';
        state.login = false;
      })
      .addCase(signupUser.pending, (state, action) => {
         state.loading = "loading";
         state.login = false;
       })
      .addCase(registerUser.fulfilled, (state,action) => {
        state.login = true;
        state.loading = "loaded";
        state.token = action.payload.token;
        state.user_id = action.payload.user;
        state.response_message = 'You are logged in';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload.email ? action.payload.email : action.payload.password;
        state.loading = "error";
        state.response_message = 'Something went wrong';
      })
      .addCase(registerUser.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user_id = null;
        state.login = false;
        state.token = null;
        state.response_message = 'You are logout';
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = "error";
        state.response_message = 'Something went wrong';
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.loading = "loading";
      })   
    }
})

export const formActions = formSlice.actions;

export default formSlice.reducer;