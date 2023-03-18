import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import user from ".";
import { getMe } from "../../services/api/bookmarks-api";

function Provider({ children }) {
  const [userData, setUserData] = useState();
  const [value, setValue] = useState({ userData });

  useEffect(() => {
    getMe().then(setUserData);
  }, []);

  useEffect(() => {
    setValue({ userData });
  }, [userData]);

  return <user.Provider value={value}>{children}</user.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export default Provider;