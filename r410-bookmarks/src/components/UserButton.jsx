import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { avatarUrl, loginUrl, logoutUrl } from "../services/api/bookmarks-api";
import Loading from "./Loading";
import user from "../contexts/user";

function UserButton() {
  const { userData } = useContext(user);

  if (userData === null) {
    return (
      <a className="UserButton" href={loginUrl()}>
        <FontAwesomeIcon icon={faKey} className="UserButton__icon" />
      </a>
    );
  }
  if (typeof userData === "object") {
    return (
      <a className="UserButton" href={logoutUrl()}>
        <img
          src={avatarUrl(userData.id)}
          className="UserButton__avatar"
          alt="user avatar"
        />
      </a>
    );
  }

  return (
    <span className="UserButton">
      <Loading className="UserButton__icon" />
    </span>
  );
}

export default UserButton;