import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from "react-router-dom";
import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
