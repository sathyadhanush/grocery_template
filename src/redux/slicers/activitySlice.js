import { createSlice } from '@reduxjs/toolkit';

const activitySlice = createSlice({
   name: 'activity',
   initialState: {
      navPath: null,
   },
   reducers: {
      navigatePath: (state, { payload }) => {
         state.navPath = payload;
      },
   },
});

export const { navigatePath } = activitySlice.actions;

export const activitySelector = state => state.activity;
const activityReducer = activitySlice.reducer;
export default activityReducer;
