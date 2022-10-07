import React from "react";
import "./styles/header.css";
import { images } from "../../../assets/image";

const Header = () => {
  return (
    <div className="header-root">
      <header className="header">
        <img src={images.logo} alt="" />
        SuRiName
      </header>
    </div>
  );
};

export default Header;
