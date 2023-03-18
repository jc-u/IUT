import React, { useContext } from "react";
import colors from "../contexts/colors";
import user from "../contexts/user";

function Footer() {
  const { userData } = useContext(user);
  const { changeColors } = useContext(colors);

  return (
    <button className="Footer" type="button" onClick={changeColors}>
      {userData ? `${userData.firstname} ${userData.lastname}` : "Anonymous"}
    </button>
  );
}

export default Footer;
