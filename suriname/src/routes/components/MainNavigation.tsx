import HeaderContainers from "@components/common/Header/containers/HeaderContainers";
import LoginContainer from "@components/Login/containers/LoginContainer";
import SignUpContainer from "@components/SignUp/containers/SignUpContainer";
import SignUpCompleteContainer from "@components/SignUpComplete/containers/SignUpCompleteContainer";
import React from "react";
import { Route, Routes } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route
        path="/signup"
        element={
          <>
            <HeaderContainers />
            <SignUpContainer />
          </>
        }
      />
      <Route
        path="/signupComplete"
        element={
          <>
            <HeaderContainers />
            <SignUpCompleteContainer />
          </>
        }
      />
    </Routes>
  );
};

export default MainNavigation;
