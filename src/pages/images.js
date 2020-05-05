import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Images() {
  console.log("@ images");
  const [zuip, set_zuip] = useState();
  const routeParameters = useParams();
  console.log("param:", routeParameters, typeof routeParameters);
  const APIparam = String(routeParameters.category);
  console.log("string param", typeof APIparam);
  const APIparam2 = APIparam.replace(/_/g, "/");
  console.log("string2 param", APIparam2);

  useEffect(() => {
    async function fetchDrink() {
      const drinks = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${APIparam2}`
      );
      const mapThirst = drinks.data.drinks;
      console.log("mapthirst: ", mapThirst, typeof mapThirst);
      console.log("dis drink:", drinks, "drink.data", drinks.data.drinks);
      function imageMap() {
        return (
          <div>
            {mapThirst.map((drink) => {
              console.log("mapped drink", drink);
              return <img src={drink.strDrinkThumb} width="25%" height="25%" />;
            })}
          </div>
        );
      }
      set_zuip(imageMap);
    }
    fetchDrink();
  }, []);

  return (
    <div>
      <h4>Images (dit wordt component images)</h4>
      <p>
        <Link to="/">Home - catagories</Link>
      </p>
      <p>{zuip}</p>
    </div>
  );
}
