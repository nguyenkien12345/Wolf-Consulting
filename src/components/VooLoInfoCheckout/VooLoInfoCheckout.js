import chervonup from "../../images/svg/icon-chervonup.svg";
import "./VooLoInfoCheckout.css";

function VooLoInfoCheckout() {
  return (
    <div className="VooLoInfoCheckout d-flex flex-column">
      <div className="AvailabilityLimit d-flex flex-row justify-content-between align-items-center">
        <span className="AvailabilityLimit-title">Hạn mức khả dụng</span>
        <span className="AvailabilityLimit-price">0đ</span>
      </div>
      <div className="TotalPayment d-flex flex-row justify-content-between align-items-center">
        <span className="TotalPayment-title">Tổng tiền thanh toán</span>
        <div className="TotalPaymentInfo d-flex flex-row align-items-center">
          <span className="TotalPayment-price">596,000đ</span>
          <div className="circle-TotalPayment">
            <img src={chervonup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VooLoInfoCheckout;
