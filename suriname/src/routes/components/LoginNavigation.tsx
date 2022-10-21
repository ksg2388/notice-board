import HeaderContainers from "@components/common/Header/containers/HeaderContainers";
import NotFound from "@components/NotFound/NotFound";
import SignUpContainer from "@components/SignUp/containers/SignUpContainer";
import SignUpCompleteContainer from "@components/SignUpComplete/containers/SignUpCompleteContainer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginContainer from "../../components/Login/containers/LoginContainer";

const LoginNavigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
      <Route path="/signup/complete" element={<SignUpCompleteContainer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default LoginNavigation;
