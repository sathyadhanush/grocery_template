import api from '../helpers/apiHelpers';
import {
    GET_PRODUCT,
    URL
  } from '../config/constant/apiConstant.js';



export const getProductApi = (formData) => (dispatch) => {
    api()
      .root(URL)
      .post(GET_PRODUCT)
      .data(formData)
      .success((a) => {
         console.log(a)
      })
      .error((e) => {
       
       
      })
      .send(() => {
        
      });
 
}