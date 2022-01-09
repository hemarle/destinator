import React from "react";
import "./Modal.css";
import modalIcon from './image/modal.svg'
function Modal() {
  return (
    <div className="modal">
    <div className="modal__Card">

      <img src={modalIcon} alt="" />
      <div className="modal__Content">
        <h2>Introducing</h2>
        <h1>AirBnB</h1>
        <h3>GiftCards</h3>

        <a href=""> Shop now</a>
      </div>
    </div>
    </div>
  );
}

export default Modal;
