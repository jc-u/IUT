import React, { useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks-api";
import BookmarkItem from "./BookmarkItem";

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
      bookmarksData.map((bookmark) => (
        <BookmarkItem key={bookmark.id} data={bookmark} />
      ))
    );
  }, [bookmarksData]);

  return (
    <article className="BookmarksList">
      <div className="BookmarksList__list">{boorkmarksList}</div>
    </article>
  );
}

export default BookmarksList;

