import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import useShowable from "./hooks/useShowable";

function FoldableCard(props) {
  const { title, children, opened, onToggleOpened } = props;
  const { isShown, className, toggleShown, setIsShown } = useShowable(
    opened,
    "foldable"
  );
  useEffect(() => setIsShown(opened), [opened]);
  const handleClick = () => {
    toggleShown();
    if (onToggleOpened !== undefined) {
      onToggleOpened(!isShown);
    }
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
  onToggleOpened: undefined,
};

FoldableCard.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  opened: PropTypes.bool,
  onToggleOpened: PropTypes.func,
};

export default FoldableCard;