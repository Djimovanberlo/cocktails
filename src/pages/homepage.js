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
              const linkDrink = String(drink.strCategory);
              console.log(linkDrink, typeof linkDrink);
              const linkDrink2 = linkDrink.replace(/\//g, "_");
              return (
                <li>
                  <Link to={`/${linkDrink2}`}>{drink.strCategory}</Link>
                </li>
              );
            })}
          </div>
        );
      }
      set_cocktailList(drinksMap);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h4>Homepage - view cocktail catgories</h4>
      <p>{cocktaiList}</p>
    </div>
  );
}
