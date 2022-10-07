import React, { useCallback, useEffect, useState } from "react";
import Login from "../Login";

const LoginContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const HandleId = useCallback((v: string) => {
    setId(v);
  }, []);

  const HandlePassword = useCallback((v: string) => {
    setPassword(v);
  }, []);

  const onClickedLoginBtn = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (!id) {
        return alert("아이디를 입력해주세요.");
      } else if (!password) {
        return alert("비밀번호를 입력하세요.");
      }
    },
    [id, password]
  );

  return (
    <Login
      id={id}
      password={password}
      HandleId={HandleId}
      HandlePassword={HandlePassword}
      onClickedLoginBtn={onClickedLoginBtn}
    />
  );
};

export default LoginContainer;
