import React, { useState } from 'react'
import "./modal.module.css"
const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <>
        {/* <div className="modal-backdrop" onClick={onClose}></div> */}
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onClose}>
              X
            </span>
          </div>
          <div className="modal-body">
            <h2>Hello Ashraf</h2>
          </div>
        </div>
      </>
    )
  );
};

export default Modal