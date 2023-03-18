import React from "react";
import BookmarksList from "./components/BookmarksList";
import Header from "./components/Header";
import UserProvider from "./contexts/user/Provider"
import ColorsProvider from "./contexts/colors/Provider"
import Footer from "./components/Footer";

function App() {
  return (
    <ColorsProvider>
      <UserProvider>
        <div className="App">
          <Header title="Bookmarks!" />
          <main className="App__main">
            <BookmarksList />
          </main>
          <Footer />
        </div>
      </UserProvider>
    </ColorsProvider>
  );
}

export default App;

