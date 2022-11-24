import React from 'react';

import { RouterBuilder } from '../common/router.js';
import { ADMIN_ROUTES } from '../../config/routes/adminRoutes';
import { LazyLoader } from '../common/loader.js';
import { ADMIN,  LOGIN } from '../../config/constant/routePathConstant.js';
import { OtherSessionsChecker } from '../common/sessionChecker.js';
import Sidebar from "./common/sideBar"
const AdminContainer = (a) => {
       
  
   return (
     
     <OtherSessionsChecker  sessionFailPath={LOGIN} currentRoute={ADMIN}>
        <div className="app d-flex">
        <Sidebar />
        <div className="content">
        <LazyLoader>
           <RouterBuilder data={ADMIN_ROUTES}/>
        </LazyLoader>
        </div>
        </div>
     
       
   
       </OtherSessionsChecker>
   );
};

export default AdminContainer;
