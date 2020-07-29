import React, { Component } from "react";
import axios from "axios";
import "../../../src/assets/Css/register.css";
var baseURL = "http://localhost:4000";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      registerErrors: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handeSubmit = this.handeSubmit.bind(this);
  }
  handleChange(e) { 
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handeSubmit(e) {
    e.preventDefault();// chưa Biết
    console.log("Form submitted");
    const {email, username, fullname, password} = this.state;
    axios({
      method:"post",
      url: "register",
      baseURL: baseURL,
      data: {
        email,
        username,
        password
      }
    })
      .then((response) => {
      console.log("form submitted");
      console.log("register res " + JSON.stringify(response));
      this.setState({ redirectToReferrer: true });
    })
    .catch((error) => {
      console.log("register error : " + error);
    });
  }
  render() {
    return (
      <div className="bg-form">
        <form onSubmit={this.handeSubmit} className="register-form">
          <img
            alt="Instagram"
            className="s4Iyt logo-1"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          ></img>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="fullname"
            placeholder="fullname"
            value={this.state.fullname}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
