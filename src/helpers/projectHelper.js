import { DEFAULT_TOKEN,  USER_DATA } from '../config/constant/projectConstant.js';
import { LOGIN } from '../config/constant/routePathConstant.js';
export const getUserData = (userData = USER_DATA) => {
    const localData = window.localStorage.getItem(userData);
    let res = {};
    try {
      res = JSON.parse(localData) || {}
    } catch (err) {
      res = localData || {};
    }
    return res;
  };
export const getLocal = () => {
    const token = window.localStorage.getItem('x-auth-token');
    const appkey =  window.localStorage.getItem('app-key');
    let res = {};
    try {
      res['token'] = JSON.parse(token);
      res['appkey'] = JSON.parse(appkey);
    } catch (err) {
      res = {};
    }
    return res;
  };

  export const storeLocal = (data = '', tokenName = DEFAULT_TOKEN) => {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    window.localStorage.setItem(tokenName, data);
  };
  export const removeLocal = (tokenName = DEFAULT_TOKEN) => {
    window.localStorage.removeItem(tokenName);
  
  };
  export const sessionDestroy = () => {
    removeLocal();
    removeLocal(USER_DATA);

   
  };