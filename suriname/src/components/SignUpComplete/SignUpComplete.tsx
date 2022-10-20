import React from "react";
import "./styles/signupcomplete.css";
import { images } from "@assets/image";

type Props = {
  onBtnClicked: () => void;
  name: string;
};

const SignUpComplete = ({ onBtnClicked, name }: Props) => {
  return (
    <>
      <div className="signupcomplete-root">
        <section className="complete-section">
          <img src={images.spoon} className="spoon" alt="" />
          <p className="complete-text">{`${name[0]}프로, 식사 잘 잡수고~`}</p>
          <p className="complete-text">회원가입 축하해~</p>
        </section>
        <section className="goto-login-button-section">
          <button className="goto-login-button" onClick={onBtnClicked}>
            로그인 하러가기
          </button>
        </section>
      </div>
    </>
  );
};

export default SignUpComplete;
