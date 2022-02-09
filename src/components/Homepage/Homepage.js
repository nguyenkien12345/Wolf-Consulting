import "./Homepage.css";
import user from "../../images/user.png";
import iconStar from "../../images/svg/icon-star.svg";
import roundCircle from "../../images/roundCircle.png";
import tiki from "../../images/tiki.png";
import sendo from "../../images/sendo.png";
import shopee from "../../images/shopee.png";
import SaleItem from "../SaleItem/SaleItem";
import VooLoInfoCheckout from "../VooLoInfoCheckout/VooLoInfoCheckout";

const ListSales = [
  {
    id: 1,
    name: "Hoàn tiền 5% tổng hóa đơn tối đa 50k",
    imageSrc: tiki,
    expiry: "28.02.2022",
  },
  {
    id: 2,
    name: "Hoàn tiền 5% tổng hóa đơn tối đa 20k",
    imageSrc: shopee,
    expiry: "29.02.2022",
  },
  {
    id: 3,
    name: "Giảm 20k cho hóa đơn trên 500k",
    imageSrc: sendo,
    expiry: "30.02.2022",
  },
];

function Homepage() {
  return (
    <div className="homepage-user">
      <div className="round-circle-bg">
        <img src={roundCircle} className="img-fluid" alt="" />
      </div>

      <div className="d-flex flex-row align-items-center user-wrapper">
        <img className="rounded img-fluid infoUser-image" src={user} alt="" />
        <div className="infoUser d-flex flex-column align-items-center justify-content-start">
          <h3 className="infoUser-name me-auto">Welcome, Nguyễn Văn A</h3>
          <div className="infoUser-member d-flex flex-row align-items-center">
            <div className="infoUser-rank d-flex flex-row align-items-center justify-content-between">
              <img
                className="infoUser-rank-img img-fluid"
                src={iconStar}
                alt=""
              />
              <span className="infoUser-rank-title">Golden User</span>
            </div>
            <p className="infoUser-rank-point">12.000 points</p>
          </div>
        </div>
      </div>

      <div
        style={{
          top: "87px",
          position: "absolute",
          right: "50%",
          transform: "translateX(50%)",
        }}
      >
        <VooLoInfoCheckout />
      </div>

      <div className="sale-list">
        <h1 className="sale-title">Ưu đãi trong tháng</h1>
        {ListSales.map((item) => (
          <SaleItem
            key={item.id}
            name={item.name}
            imageSrc={item.imageSrc}
            expiry={item.expiry}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
