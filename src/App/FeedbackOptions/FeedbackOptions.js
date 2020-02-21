import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ handleClick, style }) => {
  return (
    <>
      <input
        className={style.button_feedback}
        type="button"
        name="good"
        value="Good"
        onClick={handleClick}
      />
      <input
        className={style.button_feedback}
        type="button"
        name="neutral"
        value="Neutral"
        onClick={handleClick}
      />
      <input
        className={style.button_feedback}
        type="button"
        name="bad"
        value="Bad"
        onClick={handleClick}
      />
    </>
  );
};

FeedbackOptions.prototype = {
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
};

export default FeedbackOptions;
