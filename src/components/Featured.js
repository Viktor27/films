import React from "react";
import PropTypes from "prop-types";

const Featured = ({ featured, toggleFeatured }) => (
  <span onClick={toggleFeatured}>
    <a href="#" className={`ui right corner label ${featured ? "yellow" : ""}`}>
      <i className="star icon" />
    </a>
  </span>
);
Featured.propTypes = {
  featured: PropTypes.bool.isRequired
};

Featured.defaultProps = {
  featured: false
};

export default Featured;
