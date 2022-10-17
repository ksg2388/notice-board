import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginNavigationContainer from "./containers/LoginNavigationContainer";
import MainNavigationContainer from "./containers/MainNavigationContainer";
import "@styles/core.css";
import "@styles/color.css";
import Test from "@components/Test/Test";

type Props = {
  root: "main" | "login";
};

const RootNavigation = ({ root }: Props) => {
  return (
    <BrowserRouter>
      {root === "login" && <LoginNavigationContainer />}
      {root === "main" && <MainNavigationContainer />}
      {/* {root === "main" && <Test />} */}
    </BrowserRouter>
  );
};

export default RootNavigation;
