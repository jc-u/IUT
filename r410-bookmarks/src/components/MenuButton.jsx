import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "wouter";

function MenuButton(props) {
  const { icon, to, on, hidden } = props;

  if (hidden) {
    return null;
  }

  const button = (
    <button type="button" className="MenuButton" onClick={on}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );

  return to ? <Link to={to}>{button}</Link> : button;
}

MenuButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  to: PropTypes.string,
  on: PropTypes.func,
  hidden: PropTypes.bool,
};

MenuButton.defaultProps = {
  to: null,
  on: null,
  hidden: false,
};

export default MenuButton;
