function CheckoutItem({ name, imageSrc, alt, desc }) {
  return (
    <div
      className="input-group d-flex flex-row"
      style={{ height: "60px", alignItems: "center" }}
    >
      <input className="me-3" type="radio" value="" />
      <div className="d-flex flex-row">
        <img className="img-fluid me-3" width="30px" src={imageSrc} alt={alt} />
        <div className="d-flex flex-column">
          <span>{name}</span>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
