import React, { Component } from "react";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import Register from "./Components/Auth/Register";
import UserRoute from "./Components/User";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/logout" exact component={Logout}></Route>
            <Route path="/register" exact component={Register}></Route>
            <UserRoute/>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;