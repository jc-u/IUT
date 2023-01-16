import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'


function FoldableCard(props) {
  const { title, children, opened } = props;
  const className = "foldable"
  

  return (
    <Card
      title={
        <>
        {title}
        <FontAwesomeIcon
        className="foldable-icon"
        icon={opened ? faCircleMinus : faCirclePlus}
      />
    </>
      }
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