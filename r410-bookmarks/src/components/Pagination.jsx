import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardFast,
  faBackward,
  faForward,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { current, first, previous, next, last } = pagination ?? {};

  return (
    pagination !== null && (
      <nav className="Pagination">
        <button
          className="Pagination__button"
          type="button"
          onClick={() => onPageChange(first)}
          disabled={first >= current}
        >
          <FontAwesomeIcon icon={faBackwardFast} />
        </button>
        <button
          className="Pagination__button"
          type="button"
          onClick={() => onPageChange(previous)}
          disabled={!previous || previous >= current}
        >
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <span className="Pagination__current">
          {pagination.current}/{pagination.last}
        </span>
        <button
          className="Pagination__button"
          type="button"
          onClick={() => onPageChange(next)}
          disabled={!next || next <= current}
        >
          <FontAwesomeIcon icon={faForward} />
        </button>
        <button
          className="Pagination__button"
          type="button"
          onClick={() => onPageChange(last)}
          disabled={last <= current}
        >
          <FontAwesomeIcon icon={faForwardFast} />
        </button>
      </nav>
    )
  );
}

Pagination.defaultProps = {
  pagination: null,
};

Pagination.propTypes = {
  pagination: PropTypes.shape({
    current: PropTypes.number,
    first: PropTypes.number,
    last: PropTypes.number,
    next: PropTypes.number,
    previous: PropTypes.number,
  }),
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
