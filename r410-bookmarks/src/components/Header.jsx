import React from "react";
import PropTypes from "prop-types";
import UserButton from "./UserButton";

function Header(props) {
  const { title } = props;

  return (
    <header className="Header">
      <h1>{title}</h1>
      <UserButton />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Header;
