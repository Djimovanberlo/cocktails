import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./homepage";

export default function Images() {
  console.log("@ images");
  return (
    <div>
      <h4>Images (dit wordt component images)</h4>
      <p>
        <Link to="/">Home - catagories</Link>
      </p>
    </div>
  );
}
