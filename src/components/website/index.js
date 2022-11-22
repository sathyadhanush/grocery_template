import React, { useEffect } from 'react';
import { LazyLoader } from '../common/loader.js';
import { WebsiteSessionChecker } from '../common/sessionChecker.js';
import WEBSITE_ROUTES from '../../config/routes/websiteRoute.js';
import { RouterBuilder } from '../common/router.js';







const WebsiteContainer = () => {
    
    return (
      <>
         <WebsiteSessionChecker/>

         <LazyLoader>
            <RouterBuilder data={WEBSITE_ROUTES}/>
         </LazyLoader>
   
      </>
    );
 };
 
 export default WebsiteContainer;