import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignUpComplete from "../SignUpComplete";

type Props = {};
const SignUpCompleteContainer = (props: Props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const onBtnClicked = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return <SignUpComplete onBtnClicked={onBtnClicked} name={state} />;
};

export default SignUpCompleteContainer;
