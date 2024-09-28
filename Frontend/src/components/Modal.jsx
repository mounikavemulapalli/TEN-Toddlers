import React from "react";
import { modalCard } from "../Lists/modal";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="clone-btn-container">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-header">
          <h1>UpTodd™ Genius Premium Program</h1>
          <p>
            Exclusive Mega KIT + World's only True Personalised APP + Brain dev.
            Report & Support from World's Top Experts
          </p>
        </div>

        <div className="modal-content">
          {modalCard.map((ele) => (
            <div className="modal-card">
              <div>
                <img src={ele.img} alt="" />
              </div>
              <div>
                <h2>{ele.title} </h2>
                <p> {ele.description} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
