import React, { useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks-api";
import BookmarkItem from "./BookmarkItem";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView";
import Pagination from "./Pagination";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [boorkmarksList, setBoormarksList] = useState([]);

  useEffect(() => {
    fetchAllBookmarks().then(
      ({ "hydra:member": hydraMembers, "hydra:view": hydraView }) => {
        setBookmarksData(hydraMembers);
        setPagination(paginationFromHydraView(hydraView));
      }
    );
  }, []);

  useEffect(() => {
    setBoormarksList(
      bookmarksData.map((bookmark) => (
        <BookmarkItem key={bookmark.id} data={bookmark} />
      ))
    );
  }, [bookmarksData]);

  return (
    <>
      <article className="BookmarksList">
        <div className="BookmarksList__list">{boorkmarksList}</div>
      </article>
      <Pagination pagination={pagination} onPageChange={console.log} />
    </>
  );
}

export default BookmarksList;

