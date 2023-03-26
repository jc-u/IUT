import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserButton from "./UserButton";
import colors from "../contexts/colors";

function Header(props) {
  const { title } = props;
  const { text } = useContext(colors);

  return (
    <header className="Header">
      <h1 style={{ color: text }}>{title}</h1>
      <UserButton />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Header;
