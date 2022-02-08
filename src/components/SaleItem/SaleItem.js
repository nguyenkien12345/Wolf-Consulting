import "./SaleItem.css";

function SaleItem({ name, imageSrc, expiry }) {
  return (
    <div className="sale-item d-flex flex-row">
      <img src={imageSrc} className="sale-item-image" alt="" />
      <div className="sale-info d-flex flex-row align-items-center">
        <div className="d-flex flex-column align-items-center justify-content-center p-2 sale-info-detail">
          <h4 className="sale-info-title">{name}</h4>
          <p className="sale-info-expire">Áp dụng đến: {expiry}</p>
        </div>
        <button className="btn-apply">Áp dụng</button>
      </div>
    </div>
  );
}

export default SaleItem;
