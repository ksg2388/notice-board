import HeaderContainers from "@components/common/Header/containers/HeaderContainers";
import SignUpContainer from "@components/SignUp/containers/SignUpContainer";
import SignUpCompleteContainer from "@components/SignUpComplete/containers/SignUpCompleteContainer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginContainer from "../../components/Login/containers/LoginContainer";

const LoginNavigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route element={<HeaderContainers />}>
        <Route path="/signup" element={<SignUpContainer />} />
      </Route>
      <Route path="/signup/complete" element={<SignUpCompleteContainer />} />
    </Routes>
  );
};

export default LoginNavigation;
