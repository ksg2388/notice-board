import React from "react";
import "./styles/header.css";
import { images } from "@assets/image";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-root">
        <header className="header">
          <img src={images.logo} alt="" />
          SuRiName
        </header>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
