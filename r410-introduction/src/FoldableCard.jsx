import React, {useState} from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'


function FoldableCard(props) {
  const { title, children, opened } = props;
  const [isShown, setIsShown] = useState(opened)
  const className = `foldable${isShown ? "" : " hidden"}`;

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
      onClick={() => setIsShown(!isShown) }
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