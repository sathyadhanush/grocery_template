import api from '../helpers/apiHelpers';
import {
    GET_PRODUCT,
    URL
  } from '../config/constant/apiConstant.js';



export const getProductApi = ({limit,skip}) => (dispatch) => {
    api()
      .root(URL)
      .get(`${GET_PRODUCT}?page=0&limit=10`)
      .data()
      .success((a) => {
            
      })
      .error((e) => {
       
       
      })
      .send(() => {
        
      });
 
}