import React from "react";
import NavBar from "./NavBar";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
import { Switch, Route } from "react-router-dom";
function Content() {
  return (
    <main className="flex-auto">
      <NavBar />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
