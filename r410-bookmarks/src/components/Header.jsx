import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { title } = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Header;
