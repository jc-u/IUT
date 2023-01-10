import React from "react";
import PropTypes from "prop-types"

function Card(props) {
  const { title, children, className } = props
  return (
    <button type="button" className={`card ${className}`}>
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </button>
  );
}

Card.defaultProps = {
  title: "Title",
  children: "Content",
  className: "",
};

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;