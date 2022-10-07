import React from "react";
import "./styles/signup.css";

type Props = {
  id: string;
  idMessage: string;
  isId: boolean;
  password: string;
  passwordMessage: string;
  isPassword: boolean;
  passwordConfirm: string;
  passwordConfirmMessage: string;
  isPasswordConfirm: boolean;
  name: string;
  nameMessage: string;
  isName: boolean;
  handleId: (v: string) => void;
  handlePassword: (v: string) => void;
  handlePasswordConfirm: (v: string) => void;
  handleName: (v: string) => void;
};

const SingUp = ({
  id,
  idMessage,
  isId,
  password,
  passwordMessage,
  isPassword,
  passwordConfirm,
  passwordConfirmMessage,
  isPasswordConfirm,
  name,
  nameMessage,
  isName,
  handleId,
  handlePassword,
  handlePasswordConfirm,
  handleName,
}: Props) => {
  return (
    <div className="signup-root">
      <section className="signup-title-section">
        <h1 className="title">식사는 잡쉈어??</h1>
        <h3 className="sub-title">아니, 회원가입부터 하고~</h3>
      </section>
      <section className="signup-input-section">
        <form className="signup-form">
          <label>아이디</label>
          <input
            value={id}
            type="text"
            onChange={(e) => handleId(e.target.value)}
          />
          {id.length > 0 && (
            <span className={`message ${isId ? "success" : "error"}`}>
              {idMessage}
            </span>
          )}
          <label>비밀번호</label>
          <input
            value={password}
            type="password"
            onChange={(e) => handlePassword(e.target.value)}
          />
          {password.length > 0 && (
            <span className={`message ${isPassword ? "success" : "error"}`}>
              {passwordMessage}
            </span>
          )}
          <label>비밀번호 확인</label>
          <input
            value={passwordConfirm}
            type="password"
            onChange={(e) => handlePasswordConfirm(e.target.value)}
          />
          {passwordConfirm.length > 0 && (
            <span
              className={`message ${isPasswordConfirm ? "success" : "error"}`}
            >
              {passwordConfirmMessage}
            </span>
          )}
          <label>닉네임</label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleName(e.target.value)}
          />
          {name.length > 0 && (
            <span className={`message ${isName ? "success" : "error"}`}>
              {nameMessage}
            </span>
          )}
          <button
            className="signup-btn"
            disabled={!(isName && isId && isPassword && isPasswordConfirm)}
          >
            가입하기
          </button>
        </form>
      </section>
    </div>
  );
};

export default SingUp;
