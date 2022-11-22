import { BrowserRouter as Router  } from 'react-router-dom';
import { MAIN_ROUTES } from '../config/routes/mainRoutes.js';
import { ActivityContainer } from './common/activity.js';
import { RouterBuilder } from './common/router.js';

const AppContainer = () => {
    return ( 
    
        <Router>
             <ActivityContainer>
             <RouterBuilder data={MAIN_ROUTES} />
             </ActivityContainer>
        </Router>
       
    )

}


export default AppContainer;