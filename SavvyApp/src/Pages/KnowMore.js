import React from "react";
import saveBuy from "../Assets/save-buy-05.jpg";
import "./KnowMore.scss";
const KnowMore = (props) => {
  return (
    <div className="saveBuy">
      <img className="saveBuy__img" src={saveBuy} alt="saveBuy popup" />
      <button
        className="saveBuy__closeBtn"
        onClick={() => {
          props.onConfirm();
          document.body.style.overflow = "unset";
        }}
      >
        Close
      </button>
    </div>
  );
};

export default KnowMore;
