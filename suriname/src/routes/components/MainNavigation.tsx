import HeaderContainers from "@components/common/Header/containers/HeaderContainers";
import HomeContainer from "@components/Home/containers/HomeContainer";
import LoginContainer from "@components/Login/containers/LoginContainer";
import NotFound from "@components/NotFound/NotFound";
import SignUpContainer from "@components/SignUp/containers/SignUpContainer";
import SignUpCompleteContainer from "@components/SignUpComplete/containers/SignUpCompleteContainer";
import React from "react";
import { Route, Routes } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Routes>
      <Route element={<HeaderContainers />}>
        <Route path="/" element={<HomeContainer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainNavigation;
