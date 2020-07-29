import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../../../src/assets/Css/login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };
 
    this.handleChange = this.handleChange.bind(this);

  }

  //Lưu lại thông tin người dùng đã nhập
  handleChange(e) { 
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state.email);
    return (
      <div className="" id="Body">
        <div className="row">
          <div className="col-lg-12 col-xl-12 col-md-12">
            <div className="bg-form">
              <form className="login-form">
                <img
                  alt="Instagram"
                  className="s4Iyt logo-1"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                ></img>
                <input
                  placeholder="Số điện thoại, tên người dùng hoặc email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Mật khẩu"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button type="submit">Đăng nhập</button>
                <p>Hoặc</p>
                <div>
                  <a href="#"> Đăng nhập bằng Facebook</a>
                </div>
                <div>
                  <a className="forget-pass" href="#">
                    {" "}
                    Quên mật khẩu
                  </a>
                </div>
              </form>
            </div>
            <div className="bg-form">
              <div className="form-2">
                <p className="ask">Bạn không có tài khoản? </p>
                <a href="/register">Đăng kí</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;