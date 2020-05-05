import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import Images from "./pages/images";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Drink urself sum tasty cocktails</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:category" component={Images} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
