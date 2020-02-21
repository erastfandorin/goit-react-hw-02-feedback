import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.prototype = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};

export default Section;
