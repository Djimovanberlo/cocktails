import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Images from "./images";
import CockTailList from "../components/cocktaillist";

export default function HomePage() {
  console.log("@ Home");
  const [cocktaiList, set_cocktailList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      const drinks = response.data.drinks;
      console.log("drinks:", drinks);

      function drinksMap() {
        return (
          <div>
            {drinks.map((drink) => {
              console.log("drink:", drink.strCategory);
              return <div>{drink.strCategory}</div>;
            })}
          </div>
        );
      }
      // drinksMap();
      set_cocktailList(drinksMap);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h4>Homepage - view cocktail catgories</h4>
      <p>
        <Link to="/images">
          go to images! (dit worden catagories components)
        </Link>
      </p>
      <p>{cocktaiList}</p>
    </div>
  );
}
