import React from "react";
import BookmarksList from "../components/BookmarksList";
import { Redirect, Route, Switch, useRoute } from "wouter";

function Bookmarks() {

  const [, params] = useRoute("/bookmarks/:bookmarkId?/:edit?");
  const { bookmarkId } = params;


  return (
    <Switch>
      <Route path="/bookmarks">
        <BookmarksList />
      </Route>
      <Route path="/bookmarks/create">
        <div>Create</div>
      </Route>
      <Route path="/bookmarks/:bookmarkId">
      <div>Detail {bookmarkId}</div>
      </Route>
      <Route path="/bookmarks/:bookmarkId/edit">
      <div>Edit {bookmarkId}</div>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );

}

export default Bookmarks;
