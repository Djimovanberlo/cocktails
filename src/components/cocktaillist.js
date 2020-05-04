// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import axios from "axios";

// export default function CockTailList() {
//   console.log("list des cocktails");
//   const [cocktaiList, set_cocktailList] = useState([]);

//   async function fetchCocktails() {
//     const data = await axios.get(
//       `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
//     );
//     console.log("data:", data);
//     set_cocktailList(data);
//   }
//   useEffect(fetchCocktails(), []); // Problem with this... Maybe put it into component
//   // and import the component

//   console.log("state, list: ", cocktaiList);
//   return <div>cocktails!</div>;
// }
