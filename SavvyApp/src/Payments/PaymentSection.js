import React from "react";
import "./PaymentSection.scss";
import Hdfc from "../Assets/hdfc-logo.svg";
import Icici from "../Assets/icici-logo.svg";
import Axis from "../Assets/axis-logo.svg";
import Sbi from "../Assets/sbi-logo.svg";

const PaymentSection = () => {
  return (
    <div className="paymentContainer">
      <p className="paymentContainer__p">
        <b>Shop securely</b> setup payments with topnotch Banks
      </p>
      <div className="bank-logo">
        <img src={Hdfc} alt="HDFC" className="bank-logo__hdfc" />
        <img src={Icici} alt="ICICI" className="bank-logo__icici" />

        <img src={Axis} alt="AXIS" className="bank-logo__axis" />
        <img src={Sbi} alt="SBI" className="bank-logo__sbi" />
      </div>
    </div>
  );
};

export default PaymentSection;
