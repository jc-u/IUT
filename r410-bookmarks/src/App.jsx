import React from "react";
import BookmarksList from "./components/BookmarksList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bookmarks!</h1>
      </header>
      <main className="App__main">
        <BookmarksList />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;

