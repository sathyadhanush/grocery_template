import { useEffect, useState } from 'react';
import { useHistory , useLocation } from 'react-router-dom';

import { getLocal, getUserData } from '../../helpers/projectHelper';
import { ROLE_NAV } from '../../config/constant/projectConstant.js';
import { FullScreenLoader } from './loader.js';

export const WebsiteSessionChecker = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
       const token = getLocal();
       const { user_type = '' } = getUserData() ?? {};
       const path = ROLE_NAV?.[user_type] ?? '';
       if (token && path) {
        history.push(path);
       }
       setLoading(false);
    }, []);
    
    return loading && <FullScreenLoader/>;
 };
export const OtherSessionsChecker = ({ checkCondition = true,currentRoute,allowedRoutes=[],unverifiedPath='',sessionFailPath, onlyToken = false, children }) => {
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
      console.log(pathname)
         const token = getLocal();
         console.log(token)
         if(!token){
            history.push('/');
         }
         if (token) {
                     // history.push('/admin');
                     setSuccess(true);
               }
           setLoading(false);
    },[pathname])
   //  useEffect(async() => {
   //     const token = getLocal();
   //     const { user_type = '' } = getUserData() ?? {};
   //     const path = ROLE_NAV?.[user_type] ?? '';

   //     if (!onlyToken) {
   //        if (token && path && path !== currentRoute) {
   //          history.push(path);
   //        }
   //        setSuccess(true);
   //     }
   //     if (!token) {
   //      history.push('/');
   //        setSuccess(false);
   //     }
       
      
     
   //     setLoading(false);
   //  }, [pathname]);
    
    return loading ? <FullScreenLoader/> : success && children;
 };