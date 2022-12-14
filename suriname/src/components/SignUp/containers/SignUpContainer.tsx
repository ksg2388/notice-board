import { apiRoute, requestPost } from "@libs/api";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingUp from "../SignUp";

const SignUpContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  //오류메시지 상태저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  //유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isName, setIsName] = useState(false);

  const navigate = useNavigate();

  const handleId = useCallback((v: string) => {
    setId(v);
    if (v.length < 4) {
      setIdMessage("4글자 이상 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 ID 형식입니다.");
      setIsId(true);
    }
  }, []);

  const handlePassword = useCallback((v: string) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    setPassword(v);

    if (!passwordRegex.test(v)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  }, []);

  const handlePasswordConfirm = useCallback((v: string) => {
    setPasswordConfirm(v);
  }, []);

  const handleName = useCallback((v: string) => {
    setName(v);
    if (v.length < 2 || v.length >= 10) {
      setNameMessage("2글자 이상 10글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 닉네임입니다.");
      setIsName(true);
    }
  }, []);
  const SignUpHandle = useCallback(async () => {
    const {
      config: { status },
    } = await requestPost(apiRoute.user, {
      id: id,
      password: password,
      username: name,
    });

    if (status === 201) {
      alert("회원가입이 완료되었습니다!");
      navigate("/signup/complete", { state: name });
    } else {
      alert("회원가입에 실패했습니다...");
      return;
    }
  }, [id, password, name, navigate]);

  const onClickedSignUpBtn = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      SignUpHandle();
    },
    [SignUpHandle]
  );

  useEffect(() => {
    if (password === passwordConfirm) {
      setPasswordConfirmMessage("확인되었습니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 다릅니다.");
      setIsPasswordConfirm(false);
    }
  }, [password, passwordConfirm]);

  return (
    <SingUp
      id={id}
      idMessage={idMessage}
      isId={isId}
      password={password}
      passwordMessage={passwordMessage}
      isPassword={isPassword}
      passwordConfirm={passwordConfirm}
      passwordConfirmMessage={passwordConfirmMessage}
      isPasswordConfirm={isPasswordConfirm}
      name={name}
      nameMessage={nameMessage}
      isName={isName}
      handleId={handleId}
      handlePassword={handlePassword}
      handlePasswordConfirm={handlePasswordConfirm}
      handleName={handleName}
      onClickedSignUpBtn={onClickedSignUpBtn}
    />
  );
};

export default SignUpContainer;
