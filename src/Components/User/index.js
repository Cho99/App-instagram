import React from "react";
import { BrowserRouter as Router ,Route, Redirect } from 'react-router-dom';
import {user} from "../../constants/Config";

import Header from "../User/Header/Header";
import Main from   "./Main";


function UserRoute() {
  return (
    <Route render={props => (
        user ? 
        <div>
          <Header/>
          <Route path="/">
            <Main/>
          </Route>
        </div>
        : <Redirect to="/login" />
    )} />
      
  )
}
export default UserRoute;

