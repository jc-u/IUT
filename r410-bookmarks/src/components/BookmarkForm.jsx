import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "wouter";
import { patchBookmark, postBookmark } from "../services/api/bookmarks-api";

function BookmarkForm(props) {
  const { data } = props;
  const { id, name, url, description } = data ?? {};
  const [, setLocation] = useLocation();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bookmark = {
      id,
      name: form.name.value,
      url: form.url.value,
      description: form.description.value,
    };
    (data ? patchBookmark(bookmark) : postBookmark(bookmark)).then((json) => {
      setLocation(`/bookmarks/${json.id}/refresh`);
    });
  }

  return (
    <form className="BookmarkForm" onSubmit={handleSubmit}>
      <h1 className="BookmarkForm__title">
        {data ? `Update ${name}` : "Create a new bookmark"}
      </h1>
      <label className="BookmarkForm__item">
        Name:{" "}
        <input
          className="BookmarkForm__input"
          defaultValue={name}
          name="name"
        />
      </label>
      <label className="BookmarkForm__item">
        Url:{" "}
        <input className="BookmarkForm__input" defaultValue={url} name="url" />
      </label>
      <label className="BookmarkForm__item">
        Description:{" "}
        <textarea
          className="BookmarkForm__input"
          defaultValue={description}
          name="description"
          rows="5"
        />
      </label>
      <button className="BookmarkForm__button" type="submit">
        {data ? "Update" : "Create"}
      </button>
    </form>
  );
}

BookmarkForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

BookmarkForm.defaultProps = {
  data: null,
};

export default BookmarkForm;