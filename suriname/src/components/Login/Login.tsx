import React from "react";
import { Link } from "react-router-dom";
import "./styles/login.css";

type Props = {
  id: string;
  password: string;
  HandleId: (v: string) => void;
  HandlePassword: (v: string) => void;
  onClickedLoginBtn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Login = ({
  id,
  password,
  HandleId,
  HandlePassword,
  onClickedLoginBtn,
}: Props) => {
  return (
    <div className="login-root">
      <div className="login-title">Welcome To Suriname</div>
      <div className="login-content">
        <form className="login-form">
          <input
            type="text"
            value={id}
            className="id-input"
            name="id"
            placeholder="아이디를 입력해주세요"
            onChange={(e) => HandleId(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            className="password-input"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => HandlePassword(e.target.value)}
          ></input>
          <button className="login-btn" onClick={onClickedLoginBtn}>
            Login
          </button>
        </form>
        <Link to="/signup" className="sing-up-msg-tag">
          Go To Sing Up!!
        </Link>
      </div>
    </div>
  );
};

export default Login;
