import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => {

   const authenticated = false;

   return (
      <Route {...rest} render={(props) => {
         if(authenticated)
            return <Component {...props}/>
         return (
            <Redirect to={
               {
                  pathname: "/login",
                  state: {
                     from: props.location
                  }
               }
            }/>
         );
      }}/>
   );
};