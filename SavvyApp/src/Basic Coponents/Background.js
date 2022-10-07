import React from "react";
import "./Background.scss";
import Content from "./Content";
import PaymentSection from "../Payments/PaymentSection";
import NavBar from "../FilterSection/NavBar";

const Background = () => {
  return (
    <React.Fragment>
      <div className="background-card">
        <img
          className="background-card__img"
          src={require("../Assets/banner.jpg")}
          alt="background img"
        />
        <Content />
      </div>
      <PaymentSection />
      <NavBar />
    </React.Fragment>
  );
};

export default Background;
