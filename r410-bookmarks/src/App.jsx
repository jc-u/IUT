import React from "react";
import { Switch, Route, Redirect } from "wouter";
import Bookmarks from "./routes/Bookmarks";
import Header from "./components/Header";
import UserProvider from "./contexts/user/Provider";
import ColorsProvider from "./contexts/colors/Provider";
import Footer from "./components/Footer";
import Providers from "./components/Providers";
import Error from "./components/Error";

const providers = [ColorsProvider, UserProvider];

function App() {
  return (
    <Providers providers={providers}>
      <div className="App">
        <Header title="Bookmarks!" />
        <main className="App__main">
          <Switch>
            <Route path="/">
              <Redirect to="/bookmarks" />
            </Route>
            <Route path="/bookmarks/:sub*">
              <Bookmarks />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Providers>
  );
}

export default App;
