import React from "react";
import ButtonNext from "../ButtonNext/ButtonNext";
import VooLoInfoCheckout from "../VooLoInfoCheckout/VooLoInfoCheckout";
import selfieAi from "../../images/selfieAi.png";
import roundCircle from "../../images/roundCircle.png";
import "./Selfie.css";

function Selfie() {
  return (
    <div className="selfie">
      <div className="round-circle-bg">
        <img
          src={roundCircle}
          className="img-fluid"
          alt=""
          style={{ height: "64px" }}
        />
      </div>

      <div className="selfie-background"></div>

      <div
        style={{
          top: "20px",
          position: "absolute",
          right: "50%",
          transform: "translateX(50%)",
        }}
      >
        <VooLoInfoCheckout />
      </div>

      <div className="selfie-wrapper">
        <h1 className="selfie-title">Tự chụp ảnh chân dung</h1>

        <img
          src={selfieAi}
          href="/"
          className="img-fluid selfie-image"
          alt=""
        />

        <ButtonNext name="Tiếp tục" />
      </div>
    </div>
  );
}

export default Selfie;
