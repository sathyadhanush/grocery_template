import { combineReducers, configureStore } from '@reduxjs/toolkit';
import activityReducer from './slicers/activitySlice.js';
import sessionReducer from './slicers/sessionSlice.js';
const rootReducer = combineReducers({
   activity: activityReducer,
   session: sessionReducer,
  });
  
  const store = configureStore({ reducer: rootReducer });
  export default store;