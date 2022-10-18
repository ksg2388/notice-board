import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignUpComplete from "../SignUpComplete";

type Props = {};
const SignUpCompleteContainer = (props: Props) => {
  const navigate = useNavigate();
  const onBtnClicked = useCallback(() => {
    navigate("/login");
  }, []);

  return <SignUpComplete onBtnClicked={onBtnClicked} />;
};

export default SignUpCompleteContainer;
