import React from "react";
import PropTypes from "prop-types"

function Card(props) {
  const { title, children, className, onClick } = props
  return (
    <button type="button" className={`card ${className}`} onClick={onClick}>
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </button>
  );
}

Card.defaultProps = {
  title: "Title",
  children: "Content",
  className: "",
  onClick: () => {},
};

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;