import leftHand from "../../images/leftHand.png";
import rightHand from "../../images/rightHand.png";
import VOOLO from "../../images/VOOLO.png";
import "./LoginRegister.css";
import VooLoInfoCheckout from "../VooLoInfoCheckout/VooLoInfoCheckout";
import ButtonNext from "../ButtonNext/ButtonNext";

function LoginRegister() {
  return (
    <div className="VooLoHome">
      <div className="VooLoImages">
        <img src={leftHand} className="img-fluid leftHand-image" alt="" />
        <img src={VOOLO} className="img-fluid LogoVOOLO-image" alt="" />
        <img src={rightHand} className="img-fluid rightHand-image" alt="" />
      </div>

      {/* VooLoInfoCheckout */}
      <div
        style={{
          marginTop: "318px",
          position: "absolute",
          right: "50%",
          transform: "translateX(50%)",
        }}
      >
        <VooLoInfoCheckout />
      </div>

      {/* ButtonNext */}
      <div
        style={{
          marginTop: "502px",
          right: "50%",
          transform: "translateX(50%)",
          position: "absolute",
        }}
      >
        <ButtonNext name="Tạo tài khoản mới" />
      </div>

      <div className="VooLo-Account d-flex flex-row align-items-center justify-content-center">
        <a href="/" className="HaveAccount">
          Đã có tài khoản?
        </a>
        <a href="/" className="LoginNow">
          Đăng nhập ngay
        </a>
      </div>
    </div>
  );
}

export default LoginRegister;
