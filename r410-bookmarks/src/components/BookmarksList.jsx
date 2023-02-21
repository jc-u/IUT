import React, { useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks-api";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [boorkmarksList, setBoormarksList] = useState([]);

  useEffect(() => {
    fetchAllBookmarks().then(({ "hydra:member": hydraMembers }) => {
      setBookmarksData(hydraMembers);
    });
  }, []);

  useEffect(() => {
    setBoormarksList(
      bookmarksData.map((bookmark) => <div>{bookmark.name}</div>)
    );
  }, [bookmarksData]);

  return (
    <article className="BookmarksList">
      <div className="BookmarksList__list">{boorkmarksList}</div>
    </article>
  );
}

export default BookmarksList;

