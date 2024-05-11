import React, { useEffect, useState } from 'react'
import "./modal.css"

const ModalView = ({ body, title, closeModal, isModalOpen }) => {
  return (
    <>
      {isModalOpen ? (
        <>
          <div className="modal-full-conatiner">
            <div className="madal-container">
              <div className="modal-header">
                <div className="modal-title">{title}</div>
                <div className="modal-action" onClick={() => closeModal()}>
                  X
                </div>
              </div>
              <div className="modal-boy">{body}</div>
              <div className="modal-footer">
                <div className="modal-action" onClick={() => closeModal()}>
                  X
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalView;