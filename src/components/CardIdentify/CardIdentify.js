import React from "react";
import VooLoInfoCheckout from "../VooLoInfoCheckout/VooLoInfoCheckout";
import "./CardIdentify.css";
import frontCardId from "../../images/frontCardId.png";
import backCardId from "../../images/backCardId.png";
import trash from "../../images/trash.png";
import roundCircle from "../../images/roundCircle.png";
import ButtonNext from "../ButtonNext/ButtonNext";

function CardIdentify() {
  return (
    <div className="cardIdentify">
      <div className="round-circle-bg">
        <img
          src={roundCircle}
          className="img-fluid"
          alt=""
          style={{ height: "64px" }}
        />
      </div>

      <div className="cardIdentify-background"></div>

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

      <div className="cardIdentify-wrapper">
        <h1 className="cardIdentify-title">Đăng tải hình ảnh CMND/CCCD</h1>
        <div className="cardIdentify-images">
          <div className="cardIdentify-image-front-info">
            <div className="cardIdentify-image-front">
              <img
                src={frontCardId}
                className="img-img-fluid"
                alt="Mặt trước"
                style={{ marginBottom: "10px" }}
              />
              <img src={trash} className="img-img-fluid" alt="" />
            </div>
            <p className="mt-1">Mặt trước</p>
          </div>
          <div className="cardIdentify-image-back-info">
            <div className="cardIdentify-image-back">
              <div className="cardIdentify-rounded-back">
                <img src={backCardId} className="img-img-fluid" alt="Mặt sau" />
              </div>
            </div>
            <p className="mt-1">Mặt sau</p>
          </div>
        </div>
        <div className="cardIdentify-instruction">
          <h3 className="cardIdentify-instruction-title">Hướng dẫn</h3>
          <p>1. Đăng tải CMND/CCCD 02 mặt</p>
          <p>2. Hoặc ảnh Selfie</p>
        </div>
        <div className="cardIdentify-note">
          <h3 className="cardIdentify-note-title">Lưu ý</h3>
          <span>*File truyền đi dưới dạng *.pdf, *.jpeg, *.png</span>
        </div>
        <ButtonNext name="Tiếp tục" />
      </div>
    </div>
  );
}

export default CardIdentify;
