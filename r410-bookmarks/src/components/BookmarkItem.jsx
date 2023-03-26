import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faInfo } from "@fortawesome/free-solid-svg-icons";
import { avatarUrl } from "../services/api/bookmarks-api";
import { Link } from "wouter";

function BookmarkItem(props) {
  const { data } = props;
  const { id, name, url, owner } = data;

  return (
    <article className="BookmarkItem">
      <FontAwesomeIcon className="BookmarkItem__icon" icon={faBookmark} />
      <a className="BookmarkItem__link" href={url}>
        {name}
      </a>
      <Link to={`/bookmarks/${id}`}>
        <button type="button" className="button">
          <FontAwesomeIcon className="Icon" icon={faInfo} />
        </button>
      </Link>
      <img src={avatarUrl(owner.id)} alt={`avatar of user ${owner.login}`} />
    </article>
  );
}

BookmarkItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BookmarkItem;
