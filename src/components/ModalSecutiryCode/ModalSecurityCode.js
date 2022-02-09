import React, { useState } from "react";
import "./ModalSecurityCode.css";

function ModalSecurityCode() {
  const [openModal, setOpenModal] = useState(true);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalSecurityCode"
      >
        Nhập mã bảo mật
      </button> */}

      {openModal && (
        <>
          <div className="card bg-light text-dark cardModal-security">
            <div className="card-body text-center">
              <h3 className="card-title modalSecurity-title">
                Nhập mã bảo mật
              </h3>
              <p className="card-text modalSecurity-desc">
                Vui lòng nhập mã bảo mật để xác nhận thanh toán
              </p>
              <div className="modalSecurity-pin">
                <form>
                  <input type="password" name="number-pin1" maxlength="1" />
                  <input type="password" name="number-pin2" maxlength="1" />
                  <input type="password" name="number-pin3" maxlength="1" />
                  <input type="password" name="number-pin4" maxlength="1" />
                </form>
              </div>
              <div className="modalSecurity-footer">
                <a href="/" className="modalSecurity-forgetPassword">
                  Quên mã bảo mật?
                </a>
                <a href="/" className="modalSecurity-clickHere">
                  Nhấn vào đây
                </a>
              </div>
            </div>
            <div className="modal-close">
              <i class="bi bi-x btn-close-modal" onClick={handleCloseModal}></i>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ModalSecurityCode;
