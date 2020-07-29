import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';
import {user} from "../../constants/Config";

function UserRoute() {
  var a=4;
  return (
    <Route render={props => (
        user ? 
        <div>
          {nana()}
        </div>
        : <Redirect to="/login" />
    )} />
      
  )
}
function nana() {
  return <h2>Na nè</h2>;
}
export default UserRoute;

