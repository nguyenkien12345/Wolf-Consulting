import CheckoutItem from "../CheckoutItem";
import VooLoImage from "../../images/VOOLO.png";
import "./CheckoutEcomnmer.css";

const CheckoutEcommerceList = [
  {
    id: 1,
    name: "Thanh toán tiền mặt",
    imageSrc:
      "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg",
    alt: "cod",
    desc: "",
  },
  {
    id: 2,
    name: "Ví Moca|Grab",
    imageSrc:
      "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-viettelmoney.png",
    alt: "mocapay",
    desc: "",
  },
  {
    id: 3,
    name: "Thẻ ATM",
    imageSrc:
      "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-atm.svg",
    alt: "pay123",
    desc: "Hỗ trợ internet Banking",
  },
  {
    id: 4,
    name: "Thêm thẻ tín dụng/Ghi nợ",
    imageSrc:
      "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg",
    alt: "pay123",
  },
  {
    id: 5,
    name: "Thanh toán Mua trước trả sau cùng VooLo",
    imageSrc: VooLoImage,
    alt: "VooLo",
    desc: "",
  },
];

function CheckoutEcommerce() {
  return (
    <>
      <div className="checkout-wrapper">
        <div className="d-flex flex-column">
          <h3 className="mb-3">Chọn phương thức thanh toán</h3>
          <div className="checkout-wrapper-methods">
            {CheckoutEcommerceList.map((item) => (
              <CheckoutItem
                key={item.id}
                name={item.name}
                alt={item.alt}
                imageSrc={item.imageSrc}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="paid-wrapper mb-5">
        <div className=" d-flex flex-column">
          <div className="d-flex justify-content-between">
            <p>Tạm tính</p>
            <p>33.450.000đ</p>
          </div>
          <div className="d-flex justify-content-between">
            <span>Phí vận chuyển</span>
            <span>29.000đ</span>
          </div>
        </div>
      </div>

      <div style={{ height: "15px", backgroundColor: "#ccc" }}></div>

      <div className="mb-2 total-money" style={{ height: "75px" }}>
        <div className="d-flex justify-content-between align-items-end">
          <span>Thành tiền</span>
          <span className="text-danger fw-bold fs-3">29.000đ</span>
        </div>
        <button className="btn-choose">Chọn</button>
      </div>
    </>
  );
}

export default CheckoutEcommerce;
