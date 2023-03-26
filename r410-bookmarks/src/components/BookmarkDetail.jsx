import React from "react";
import PropTypes from "prop-types";
import { avatarUrl } from "../services/api/bookmarks-api";

function BookmarkDetail(props) {
  const { data } = props;
  const { name, description, url, owner } = data;

  return (
    <article className="BookmarkDetail">
      <h1 className="BookmarkDetail__title" href={url}>
        {name}
      </h1>
      <fieldset>
        <legend>User</legend>
        <img src={avatarUrl(owner.id)} alt={`avatar of user ${owner.login}`} />
        <div>{owner.login}</div>
      </fieldset>
      <fieldset>
        <legend>Bookmark</legend>
        <div>{description}</div>
        <div>{url}</div>
      </fieldset>
    </article>
  );
}

BookmarkDetail.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isPublic: PropTypes.bool.isRequired,
    rateAverage: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BookmarkDetail;
