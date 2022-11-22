import { lazy } from 'react';
import {
    LOGIN,
    LOGIN_OTP
} from "../constant/routePathConstant"
const Login = lazy(() => import('../../components/website/login.js'));
const LoginOtp = lazy(() => import('../../components/website/loginOtp.js'))



const WEBSITE_ROUTES = [
    {component:Login,path:LOGIN},
    {component:LoginOtp,path:LOGIN_OTP}
]

export default WEBSITE_ROUTES