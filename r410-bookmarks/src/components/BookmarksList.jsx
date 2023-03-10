import React, { useCallback, useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks-api";
import BookmarkItem from "./BookmarkItem";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView";
import Pagination from "./Pagination";
import Loading from "./Loading";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [boorkmarksList, setBoormarksList] = useState([]);

  const updateBookmarks = useCallback(
    (page = 1) => {
      setBookmarksData(null);
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.set("page", page);
      fetchAllBookmarks(urlSearchParams).then(
        ({ "hydra:member": hydraMembers, "hydra:view": hydraView }) => {
          setBookmarksData(hydraMembers);
          setPagination(paginationFromHydraView(hydraView));
        }
      );
    },
    [setBookmarksData]
  );

  useEffect(updateBookmarks, []);


  useEffect(() => {
    setBoormarksList(
      bookmarksData &&
        bookmarksData.map((bookmark) => (
          <BookmarkItem key={bookmark.id} data={bookmark} />
        ))
    )
  }, [bookmarksData]);

  return bookmarksData === null ? (
    <Loading />
  ) : (

    <>
      <article className="BookmarksList">
        <div className="BookmarksList__list">{boorkmarksList}</div>
      </article>
      <Pagination pagination={pagination} onPageChange={updateBookmarks} />
    </>
  );
}

export default BookmarksList;

