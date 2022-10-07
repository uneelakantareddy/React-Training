import React from "react";
import "./Header.scss";
import Savvylogo from "../Assets/slogo1.svg";
// import Background from "./Background";

const Header = () => {
  return (
    <div>
      <div className="top-container">
        <img
          className="top-container__logo"
          src={Savvylogo}
          alt="logo of the app"
        />
      </div>
      {/* <Background /> */}
    </div>
  );
};

export default Header;
