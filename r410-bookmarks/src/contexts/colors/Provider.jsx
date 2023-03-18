import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import context from ".";

function Provider({ children }) {
  const [text, setText] = useState("#e9ad5a");
  const changeColors = () => {
    setText(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };
  const [value, setValue] = useState({ text, changeColors });

  useEffect(() => {
    setValue({ text, changeColors });
  }, [text]);

  return <context.Provider value={value}>{children}</context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export default Provider;
