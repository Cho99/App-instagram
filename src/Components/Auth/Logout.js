import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from "axios";
class Logout extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <Redirect to="/login" />
    );
  }
}

export default Logout;
