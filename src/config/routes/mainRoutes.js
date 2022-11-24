import { lazy } from 'react';
import WebsiteContainer from '../../components/website';
import { LOGIN ,ADMIN ,LOGIN_OTP} from '../constant/routePathConstant';
import AdminContainer from '../../components/admin';
const Login = lazy(() => import('../../components/website/login.js'));
const LoginOtp = lazy(() => import('../../components/website/loginOtp.js'))
export const MAIN_ROUTES = [
   
    { component: Login,   path: LOGIN },
    { component: LoginOtp, path: LOGIN_OTP },
    { component: AdminContainer,subRoutes:"*", exact: false, path: ADMIN },
   
  ];
  