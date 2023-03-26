import React from "react";
import PropTypes from "prop-types";
import MenuButton from "./MenuButton";

function createButtons(data) {
  return Object.entries(data).map(([key, value]) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MenuButton key={key} {...value} />
  ));
}

function Menu(props) {
  const { left, right } = props;
  const leftButtons = createButtons(left);
  const rightButtons = createButtons(right);
  return (
    <nav className="Menu">
      <div className="Menu__left">{leftButtons}</div>
      <div className="Menu__right">{rightButtons}</div>
    </nav>
  );
}

const subMenuType = PropTypes.objectOf(
  PropTypes.exact({
    icon: PropTypes.object.isRequired,
    to: PropTypes.string,
    on: PropTypes.func,
    hidden: PropTypes.bool,
  })
);

Menu.propTypes = {
  left: subMenuType,
  right: subMenuType,
};

Menu.defaultProps = {
  left: {},
  right: {},
};

export default Menu;
