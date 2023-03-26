import React from "react";
import { Switch, Route, Redirect } from "wouter";
import Bookmarks from "./routes/Bookmarks";
import Header from "./components/Header";
import UserProvider from "./contexts/user/Provider";
import ColorsProvider from "./contexts/colors/Provider";
@@ -14,7 +15,14 @@ function App() {
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
          </Switch>
        </main>
        <Footer />
      </div>
    </Providers>
  );
}

export default App;
