import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function FoldableCard(props) {
  const { title, children, opened } = props;
  const className = "foldable"
  

  return (
    <Card
      title={opened ? title : ""}
      className={opened ? "foldable shown" : className}
      children={opened ? children : ""}>
      </Card>
  );
}

FoldableCard.defaultProps = {
  title: "Title",
  children: "Content",
  opened: false,
};

FoldableCard.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  opened: PropTypes.bool,
};

export default FoldableCard;