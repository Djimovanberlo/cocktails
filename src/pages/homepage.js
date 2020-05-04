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
      console.log("test");
      const data = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
      );
      console.log("data:", data);
      console.log("data.data", data.data);
      set_cocktailList(data.data);
    }
    fetchData();
  }, []);
  // above useEffect: declare & call async function within the useState to prevent trippin'
  console.log("list: ", cocktaiList);
  console.log("typeof", typeof cocktaiList);

  return (
    <div>
      <h4>Homepage - view cocktail catgories</h4>
      <p>
        <Link to="/images">
          go to images! (dit worden catagories components)
        </Link>
      </p>
    </div>
  );
}
