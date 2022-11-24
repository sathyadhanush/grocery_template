import axios from 'axios';
import { NETWORK_ERROR, USER_TYPE_LOGIN } from '../config/constant/projectConstant.js';
import { sessionDestroy  , getLocal , getUserData} from './projectHelper.js';
class ApiClass {
    _url = '';
    _data = {};
    _method = '';
    _badRequest = null;
    _authFail = null;
    _accessDenied = null;
    _notFound = null;
    _serverError = null;
    _success = null;
    _error = null;
    _query = null;
    _progress = null;
    _api_root = null;
    _headers = {
       'Content-Type': 'application/json',
       
    };
    root = (root) => {
       this._api_root = root;
       return this;
    };
    get = (path) => {
       this._method = 'GET';
       this._url = this._api_root + path;
       return this;
    };
    
    post = (path) => {
       this._method = 'POST';
       this._url = this._api_root + path;
       return this;
    };
    put = (path) => {
       this._method = 'PUT';
       this._url = this._api_root + path;
       return this;
    };
    onUploadProgress = (callback = null) => {
     
       this._progress = (val)=>{
          const { total = null, loaded = null } = val;
          if (total && loaded) {
             let per = Math.round((loaded / total) * 100);
             callback?.(val,per)
          }
       }
       return this;
       
    };
    delete = (path) => {
       this._method = 'DELETE';
       this._url = this._api_root + path;
       return this;
    };
    
    success = (callback = null) => {
       this._success = callback;
       return this;
    };
    error = (callback = null) => {
       this._error = callback;
       return this;
    };
    
    badRequest400 = (callback = null) => {
       this._badRequest = callback;
       return this;
    };
    
    authFail401 = (callback = null) => {
       this._authFail = callback;
       return this;
    };
    
    accessDenied403 = (callback = null) => {
       this._accessDenied = callback;
       return this;
    };
    
    notFound404 = (callback = null) => {
       this._notFound = callback;
       return this;
    };
    
    serverErr500 = (callback = null) => {
       this._serverError = callback;
       return this;
    };
    
    data = (a) => {
       if (this._query) {
          this._data['variables'] = a;
       } else {
          this._data = a;
       }
       return this;
    };
    upload = (callback = null) => {
       this._headers = {
          'Content-type': 'multipart/form-data',
       };
       return this.send(callback);
    };
    send = async (callback = null) => {
       if (!this._api_root) {
          throw new Error('root path missing');
       }
       const {token = '' , appkey = ''} = getLocal();
       let res = null;
       let err = null;
       await axios({
          method: this._method,
          url: this._url,
          data: this._data,
          headers: { ...this._headers, "auth-token" : token , "x-app-key" : appkey },
          onUploadProgress: this._progress,
       }).then((r) => {
            res = r;
            if (r?.data?.status) {
               this._success?.call(this, res.data);
            } else {
               throw { response: { data: res.data } };
            }
         })
         .catch((e) => {
            err = e;
            if (!err?.response && err.toString().includes(NETWORK_ERROR)) {
             //   infoToast({
             //      title: 'Network Error',
             //      msg: 'Please check you internet and try once again',
             //   });
               console.log('Network error. Please check you internet and try once again');
               return;
            }
            const data = err?.response?.data ?? {};
            const { message: msg = '' } = data;
            const { status } = e?.response ?? {};
            let errorExec = true;
            
            switch (status) {
               case 400: //input fails
                  this._badRequest?.call(this, data);
                  // if (!this._badRequest) {
                  //    errorToast({ title: "Bad ", msg });
                  // }
                  break;
               case 401: //session fail or expiry
                 const { user_type='' } = getUserData()
                  this._authFail?.call(this, data);
                  if (!this._authFail) {
                     // errorToast({ title: 'Authentication Failed', msg });
                     if (user_type) {
                        sessionDestroy(USER_TYPE_LOGIN?.[user_type]);
                     }
                     errorExec = false;
                  }
                  break;
               case 403: //session ok but access prevent
                  this._accessDenied?.call(this, data);
                  if (!this._accessDenied) {
                     // warningToast({ title: 'Permission Denied', msg });
                  }
                  errorExec = false;
                  break;
               case 404: //not found path
                  this._notFound?.call(this, data);
                  if (!this._notFound) {
                     // errorToast({ title: 'Not Found', msg });
                  }
                  errorExec = false;
                  break;
               case 500: //internal server error
             
                  this._serverError?.call(this, data);
                  if (!this._serverError) {
                     // errorToast({ title: 'Internal Server Error', msg });
                     this._error?.call(this, err?.response?.data ?? {});
                  }
                  errorExec = false;
                  break;
               default:
                  break;
            }
            
            if (this._error && errorExec) {
               this._error?.call(this, err?.response?.data ?? {});
            }
         });
       if (callback && (res || err?.response)) {
          callback?.call(this, err?.response, err?.response?.status, res);
       }
    };
 }
 
 const api = () => new ApiClass();
 export default api;