import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading(props) {
  const { className } = props;

  return (
    <FontAwesomeIcon
      className={`Loading ${className}`}
      icon={faSpinner}
      pulse
    />
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: "",
};

export default Loading;