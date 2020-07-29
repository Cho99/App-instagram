import React from "react";
import Header from  "../User/Header/Header";
import Home from "./Home";
import Post from "./Post";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Main() {
    return(
        <div className="View">
            <div>
                <Router>
                    <Switch>
                        <Route path="/about" exact component ={About}></Route>
                        <Route path="/" exact component ={Home}>
                            <Home/>
                        </Route>
                        <Route path="/post" exact component ={Post}></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

function About() {
    return <h2>About</h2>
}
export default Main;