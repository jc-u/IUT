import React from "react";
import PropTypes from "prop-types";

function Providers(props) {
  const { children, providers } = props;

  return providers.reduce(
    (content, Provider) => <Provider>{content}</Provider>,
    children
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
  providers: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default Providers;
