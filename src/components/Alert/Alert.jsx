import React from 'react';
import './Alert.scss';

function Alert({
  text, style, yesButton, noButton,
}) {
  return (
    <div className="Modal" style={{ display: style }}>
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
  );
}

Alert.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
}

export default Alert;
