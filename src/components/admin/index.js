import React from 'react';

import { RouterBuilder } from '../common/router.js';
import { ADMIN_ROUTES } from '../../config/routes/adminRoutes';
import { LazyLoader } from '../common/loader.js';
import { ADMIN,  LOGIN } from '../../config/constant/routePathConstant.js';
import { OtherSessionsChecker } from '../common/sessionChecker.js';
import Sidebar from "./common/sideBar"
const AdminContainer = (a) => {
       
  
   return (
     
    //  <OtherSessionsChecker  sessionFailPath={LOGIN} currentRoute={ADMIN}>
       <>
       <Sidebar />
        <LazyLoader>
           <RouterBuilder data={ADMIN_ROUTES}/>
        </LazyLoader>
        </>
    //   </OtherSessionsChecker>
   );
};

export default AdminContainer;
