import { createSlice } from '@reduxjs/toolkit';


const adminSlice = createSlice({
    name: 'adminDashboard',
    initialState :{
        product : []
    },
   
reducers : {
    setProduct: (state, { payload }) => {
        state.product = payload;
      },
}
})

export const  {setProduct} = adminSlice.actions;
export const adminDashboardSelector = (state) => state.adminDashboard;
const adminDashboardReducer = adminSlice.reducer;
export default adminDashboardReducer;