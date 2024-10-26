import React, { useState } from "react";
import Button from "./premiumButton";
import Popup from "./Popup";
import "./PopupButton.css";
const PopupButton = ({ text }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="how-it-works">
      <div className="button-center">
        {/* Correct Button Component */}
        <Button
          className="a-btn"
          text={text}
          onClick={handleOpenPopup} // Ensure you're handling the click event
        >
          {" "}
          {text}
        </Button>

        {/* Popup Logic */}
        {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
      </div>
    </div>
  );
};

export default PopupButton;
