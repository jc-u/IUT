import React from "react";
import BookmarksList from "./components/BookmarksList";
import UserProvider from "./contexts/user/Provider"

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header>
          <h1>Bookmarks!</h1>
        </header>
        <main className="App__main">
          <BookmarksList />
        </main>
        <footer>footer</footer>
      </div>
    </UserProvider>

  );
}

export default App;

