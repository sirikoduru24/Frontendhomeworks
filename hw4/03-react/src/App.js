import './index';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Houses from "./Houses";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <a class="navbar-brand"><h1 class="links">Exercise-3</h1></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarMd">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="collapsingNavbarMd">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/home"><h4 class="links">Home</h4></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/search"><h4 class="links">Search</h4></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/houses"><h4 class="links">Home</h4></a>
            </li>
        </ul>
    </div>
</nav>
  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/Houses">
            <Houses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
