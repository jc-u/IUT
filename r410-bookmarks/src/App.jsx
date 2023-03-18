import React from "react";
import BookmarksList from "./components/BookmarksList";
import Header from "./components/Header";
import UserProvider from "./contexts/user/Provider"

function App() {
  return (
    <UserProvider>
      <div className="App">
      <Header title="Bookmarks!" />
        <main className="App__main">
          <BookmarksList />
        </main>
        <footer>footer</footer>
      </div>
    </UserProvider>

  );
}

export default App;

