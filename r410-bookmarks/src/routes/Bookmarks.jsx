import React, { useContext, useEffect, useState } from "react";
import BookmarksList from "../components/BookmarksList";
import { Redirect, Route, Switch, useLocation, useRoute } from "wouter";
import Loading from "../components/Loading";
import { deleteBookmark, fetchBookmark } from "../services/api/bookmarks-api";
import Menu from "../components/Menu";
import {
  faEdit,
  faLeftLong,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import BookmarkDetail from "../components/BookmarkDetail";
import BookmarkForm from "../components/BookmarkForm";
import userContext from "../contexts/user";

function Bookmarks() {

  const { userData } = useContext(userContext);
  const [, setLocation] = useLocation();
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

  function handleDelete() {
    setBookmark();
    deleteBookmark(bookmarkId).then(() => {
      setLocation("/bookmarks");
    });
  }



  return (
    <Switch>
      <Route path="/bookmarks">
      <Menu
          right={{
            create: {
              icon: faPlus,
              to: "/bookmarks/create",
              hidden: !userData?.id,
            },
          }}
        />
        <BookmarksList />
      </Route>
      <Route path="/bookmarks/create">
      <Menu left={{ back: { icon: faLeftLong, to: "/bookmarks" } }} />
      <BookmarkForm />
      </Route>
      <Route path="/bookmarks/:bookmarkId">
      <Menu
          left={{ back: { icon: faLeftLong, to: "/bookmarks" } }}
          right={{
            edit: {
              icon: faEdit,
              to: `/bookmarks/${bookmarkId}/edit`,
              hidden: !userData?.id || userData.id !== bookmark?.owner.id,
            },
          }}
        />
      {!bookmark ? <Loading /> : <BookmarkDetail data={bookmark} />}
      </Route>
      {userData && userData.id === bookmark?.owner.id && (
        <Route path="/bookmarks/:bookmarkId/edit">
          <Menu
            left={{
              back: { icon: faLeftLong, to: `/bookmarks/${bookmarkId}` },
            }}
            right={{
              delete: {
                icon: faTrash,
                on: handleDelete,
                hidden: !userData?.id || userData.id !== bookmark?.owner.id,
              },
            }}
          />
          {!bookmark ? <Loading /> : <BookmarkForm data={bookmark} />}
        </Route>
      )}
      <Route>
        <Redirect to="/bookmarks" />
      </Route>
    </Switch>
  );

}

export default Bookmarks;
