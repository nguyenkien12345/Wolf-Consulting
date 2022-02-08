import "./ModalPhone.css";
import iconChervonright from "../images/svg/icon-chervonright.svg";

function ModalPhone() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalPhone"
      >
        Nhập số điện thoại
      </button>

      <div
        className="modal fade"
        id="modalPhone"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="card bg-light text-dark cardModalPhone">
            <div className="card-body text-center">
              <h3 className="card-title modalPhone-title">
                Nhập số điện thoại
              </h3>
              <p className="card-text modalPhone-desc">
                Vui lòng nhập số điện thoại của bạn để đăng ký tài khoản
              </p>
              <div className="input-group form-modalphone">
                <select
                  className="form-select form-select-modalphone"
                  aria-label="Default select example"
                >
                  <option selected>84+</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <input
                  type="text"
                  className="form-control form-input-modalphone"
                  placeholder="0123456789"
                />
                <img
                  src={iconChervonright}
                  className="icon-fluid iconChervonright"
                  height="20px"
                  width="15px"
                  alt=""
                />
              </div>
              <div className="modalPhone-notification d-flex flex-row justify-content-start align-items-end">
                <i className="bi bi-info-circle"></i>
                <span className="modalPhone-notification-title">
                  Số điện thoại chưa đăng ký BNPL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalPhone;
