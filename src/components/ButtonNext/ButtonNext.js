import "./ButtonNext.css";

function ButtonNext({ name }) {
  return (
    <div className="btn-register">
      <span className="btn-register-content">{name}</span>
      <i class="bi bi-chevron-right"></i>
    </div>
  );
}

export default ButtonNext;
