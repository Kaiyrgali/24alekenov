import React from 'react';
import PropTypes from 'prop-types';
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
            type="button"
            className="Alert-Btn Alert-Btn_Green"
            onClick={yesButton}
          >
            Yes
          </button>
          <button
            type="button"
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
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  yesButton: PropTypes.func.isRequired,
  noButton: PropTypes.func.isRequired,
};

export default Alert;
