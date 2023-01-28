import React from "react";
import FoldableCard from "./FoldableCard"
import PropTypes from "prop-types"

function Cards(props) {
  const {cardsData} = props
  const foldableCards = cardsData.map((data, index) => (
    <FoldableCard
      key={data.id}
      title={data.title}
    >
      {data.content}
    </FoldableCard>
  ));
  return <div className="cards">{foldableCards}</div>;
}

Cards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Cards;
