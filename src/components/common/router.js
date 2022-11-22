import { Route,Switch} from 'react-router-dom';
import { NotFound } from './notFound.js';
import React from 'react';

export const RouterBuilder = ({ data }) => {
  return (
    <Switch>
       {data && data.map(({ component, path, exact = true, subRoutes = null }) => {
          let navPath = subRoutes ? [path,`${path}/${subRoutes}`]: path;
          return <Route key={path} path={navPath} exact={exact} component={component}/>
       })}
       <Route path="*" component={NotFound}/>
    </Switch>
  );
};
