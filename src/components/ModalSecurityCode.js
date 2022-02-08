import "./ModalSecurityCode.css";

function ModalSecurityCode() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalSecurityCode"
      >
        Nhập mã bảo mật
      </button>

      <div
        className="modal fade"
        id="modalSecurityCode"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="card bg-light text-dark cardModalSecurityCode">
            <div className="card-body text-center">
              <h3 className="card-title modalSecurityCode-title">
                Nhập mã bảo mật
              </h3>
              <p className="card-text modalSecurityCode-desc">
                Vui lòng nhập mã bảo mật để xác nhận thanh toán
              </p>
              <div className="SecurityPin">
                <form>
                  <input type="password" maxlength="1" />
                  <input type="password" maxlength="1" />
                  <input type="password" maxlength="1" />
                  <input type="password" maxlength="1" />
                </form>
              </div>

              <div className="modalSecurityCode-notification d-flex flex-row justify-content-center align-items-end">
                <a className="modalSecurityCode-notification-forget" href="/">
                  Quên mã bảo mật?
                </a>
                <a
                  className="modalSecurityCode-notification-clickhere"
                  href="/"
                >
                  Nhấn vào đây
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSecurityCode;
