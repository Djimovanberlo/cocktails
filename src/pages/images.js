import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./homepage";
import axios from "axios";

export default function Images() {
  console.log("@ images");

  async function fetchDrink() {
    const drink = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
    );
    console.log("dis drink:", drink);
  }

  fetchDrink();
  return (
    <div>
      <h4>Images (dit wordt component images)</h4>
      <p>
        <Link to="/">Home - catagories</Link>
      </p>
    </div>
  );
}
