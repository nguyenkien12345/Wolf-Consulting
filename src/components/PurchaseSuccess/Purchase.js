import ButtonNext from "../ButtonNext/ButtonNext";
import "./Purchase.css";

function Purchase() {
  return (
    <div className="purchase-page">
      <p>Thank for your purchasing at ABC</p>
      <p>Your shopping code</p>
      <p className="purchase-code">
        <b>SPY-200305-0306-F94C</b>
      </p>
      <ButtonNext name="Tiếp tục mua sắm" />
    </div>
  );
}

export default Purchase;
