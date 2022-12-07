import { combineReducers, configureStore } from '@reduxjs/toolkit';
import activityReducer from './slicers/activitySlice.js';
import sessionReducer from './slicers/sessionSlice.js';
import adminReducer from './slicers/adminSlice.js';
const rootReducer = combineReducers({
   activity: activityReducer,
   session: sessionReducer,
   admin : adminReducer,
  });
  
  const store = configureStore({ reducer: rootReducer });
  export default store;