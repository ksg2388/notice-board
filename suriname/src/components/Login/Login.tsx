import React from "react";
import "./styles/login.css";

const Login = () => {
  return (
    <div className="login-root">
      <div className="login-title">Welcome To Suriname</div>
      <div className="login-content">
        <form className="login-form">
          <input
            type="text"
            className="id-input"
            name="id"
            placeholder="아이디를 입력해주세요"
          ></input>
          <input
            type="text"
            className="password-input"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          ></input>
          <button className="login-btn">Login</button>
        </form>
        <a className="sing-up-msg-tag">Go To Sing Up!!</a>
      </div>
    </div>
  );
};

export default Login;
