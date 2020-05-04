import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function HomePage() {
  console.log("@ Home");
  return (
    <div>
      <h4>Homepage - view cocktail catagories</h4>
      <p>
        <Link to="/images">
          go to images! (dit worden catagories components)
        </Link>
      </p>
    </div>
  );
}
