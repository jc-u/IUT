import React, { useEffect, useState } from "react";
import BookmarksList from "../components/BookmarksList";
import { Redirect, Route, Switch, useRoute } from "wouter";
import Loading from "../components/Loading";
import { fetchBookmark } from "../services/api/bookmarks-api";

function Bookmarks() {

  const [, params] = useRoute("/bookmarks/:bookmarkId?/:edit?");
  const { bookmarkId } = params;
  const [bookmark, setBookmark] = useState();

  useEffect(() => {
    setBookmark();
    if (parseInt(bookmarkId, 10)) {
      fetchBookmark(bookmarkId).then(setBookmark);
    }
  }, [bookmarkId]);

  if (bookmark === null) {
    return <Redirect to="/bookmarks" />;
  }



  return (
    <Switch>
      <Route path="/bookmarks">
        <BookmarksList />
      </Route>
      <Route path="/bookmarks/create">
        <div>Create</div>
      </Route>
      <Route path="/bookmarks/:bookmarkId">
      {!bookmark ? <Loading /> : <div>Detail {bookmark.name}</div>}
      </Route>
      <Route path="/bookmarks/:bookmarkId/edit">
      {!bookmark ? <Loading /> : <div>Edit {bookmark.name}</div>}
      </Route>
      <Route>
        <Redirect to="/bookmarks" />
      </Route>
    </Switch>
  );

}

export default Bookmarks;
