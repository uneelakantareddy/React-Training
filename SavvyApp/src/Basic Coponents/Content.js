import React, { useState } from "react";
import "./Content.scss";

import KnowMore from "../Pages/KnowMore";
const Content = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setOpenHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="content">
      <h1 className="content__h1">Get Rewarded with savvyPay</h1>
      <h2 className="content__h2">
        Wish, Save and Buy for the product you love,guilt free
      </h2>

      <button
        className="content__knowMore"
        onClick={() => {
          setModalIsOpen(true);
          document.body.style.overflow = "hidden";
        }}
      >
        KnowMore
      </button>
      {modalIsOpen && <KnowMore onConfirm={setOpenHandler} />}
    </div>
  );
};

export default Content;
