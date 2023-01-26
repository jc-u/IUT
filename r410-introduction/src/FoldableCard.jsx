import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import useShowable from "./hooks/useShowable";

function FoldableCard(props) {
  const { title, children, opened } = props;
  const { isShown, className, toggleShown } = useShowable(
    opened,
    "foldable"
  );

  const handleClick = () => {
    toggleShown();
  };

  return (
    <Card
      title={
        <>
        {title}
        <FontAwesomeIcon
        className="foldable-icon"
        icon={isShown ? faCircleMinus : faCirclePlus}
      />
    </>
      }
      className={className}
      onClick={handleClick}
      children={isShown && children}>
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