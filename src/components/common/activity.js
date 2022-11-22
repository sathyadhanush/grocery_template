import { useEffect,useState } from 'react';
import {   useHistory } from 'react-router-dom';
import { activitySelector, navigatePath } from '../../redux/slicers/activitySlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { sessionSuccess } from '../../redux/slicers/sessionSlice.js';
import { getUserData,getLocal } from '../../helpers/projectHelper.js';

import { FullScreenLoader } from './loader.js';
import { ROLE_NAV } from '../../config/constant/projectConstant.js';
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
export const ActivityContainer = ({ children }) => {
   const { navPath } = useSelector(activitySelector);
   const dispatch = useDispatch();
   const history = useHistory();
   
   useEffect(() => {
      const userData = getUserData();
      if (userData) {
         dispatch(sessionSuccess(userData));
      }
   }, []);
   useEffect(() => {
      if (navPath) {
        history.push(navPath);
         dispatch(navigatePath(null));
      }
   }, [navPath]);
 
   return children;
};
