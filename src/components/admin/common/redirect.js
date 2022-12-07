import { Redirect } from 'react-router-dom';
import { ADMIN_DASHBOARD } from '../../../config/constant/routePathConstant.js';

export const RedirectToAdminDashboard = () => {

   return <Redirect to={ADMIN_DASHBOARD}/>;
};
