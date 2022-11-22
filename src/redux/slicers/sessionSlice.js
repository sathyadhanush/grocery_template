import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
   name: 'session',
   initialState: {
      loginLoading: false,
      signUpLoading: false,
      forgetLoading: false,
      activationLoading: false,
      resetPasswordLoading: false,
      session: false,
      sessionData: {},
   },
   reducers: {
      sessionSuccess: (state, { payload }) => {
         state.sessionData = payload;
         state.session = true;
      },
      sessionFail: (state) => {
         state.session = false;
         state.sessionData = {};
      },
      loginLoading: (state, { payload }) => {
         state.loginLoading = payload;
      },
      signUpLoading: (state, { payload }) => {
         state.signUpLoading = payload;
      },
      forgetLoading: (state, { payload }) => {
         state.forgetLoading = payload;
      },
      resetPasswordLoading: (state, { payload }) => {
         state.resetPasswordLoading = payload;
      },
      activationLoading: (state, { payload }) => {
         state.activationLoading = payload;
      },
    
   },
});

export const {
   sessionSuccess,
   sessionFail,
   loginLoading,
   signUpLoading,
   forgetLoading,
   resetPasswordLoading,
   activationLoading,
   
} = sessionSlice.actions;

export const sessionSelector = state => state.session;

const sessionReducer = sessionSlice.reducer;
export default sessionReducer;
