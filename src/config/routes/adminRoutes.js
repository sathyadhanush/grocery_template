import { lazy } from 'react';
import {
   ADMIN_DASHBOARD,
   ADMIN
} from "../constant/routePathConstant";
import { RedirectToAdminDashboard } from '../../components/admin/common/redirect.js';
const ProductPage = lazy(() => import('../../components/admin/product'));




export const ADMIN_ROUTES = [
    { component: RedirectToAdminDashboard, path: ADMIN },
    {component:ProductPage,path:ADMIN_DASHBOARD},
    
]
