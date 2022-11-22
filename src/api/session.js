import api from '../helpers/axiosHelper.js';
import {
    LOGIN_API,
    LOGIN_API_ROOT
  } from '../config/constant/apiConstant.js';

export const loginApi = (formData, history) => (dispatch) => {
    dispatch(loginLoading(true));
    api()
      .root(LOGIN_API_ROOT)
      .post(LOGIN_API)
      .data(formData)
      .success((a) => {
        const { message, result = {} } = a;
        const { access_token = null } = result;
        successToast({ title: 'Success', msg: message });
        storeLocal(access_token);
        storeLocal(result, USER_DATA);
  
        dispatch(sessionSuccess(result));
   
        const path = ROLE_NAV?.[result?.user_type] ?? '';
       if (path) {
          history.push(path);
        }
      })
      .error((e) => {
        const { message: msg = '' } = e;
        devConsoleLog(e);
        dispatch(sessionFail());
       
      })
      .send(() => {
        dispatch(loginLoading(false));
      });
  };