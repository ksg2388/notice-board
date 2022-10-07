import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContainers from "../../components/common/Header/containers/HeaderContainers";
import LoginContainer from "../../components/Login/containers/LoginContainer";
import SignUpContainer from "../../components/SignUp/containers/SignUpContainer";

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
    </Routes>
  );
};

export default MainNavigation;
