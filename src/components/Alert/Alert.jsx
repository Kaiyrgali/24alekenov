import React from "react";
import './Alert.scss';

const Alert = ({ text, style, yesButton, noButton }) => {
  // console.log('Allert style >', style)
  return (
    <div className="Modal" style={{display: style}}>
      <div className="Alert">
        <p className="Alert-Text">{text}</p>
        <div className="Alert-Btns">
          <button
            className="Alert-Btn Alert-Btn_Green"
            onClick={yesButton}
          >
            Yes
          </button>
          <button
            className="Alert-Btn Alert-Btn_Red"
            onClick={noButton}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default Alert;
