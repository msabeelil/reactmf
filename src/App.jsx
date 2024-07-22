import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Button from "./components/Button";
import ShopItem from "./components/ShopItem";
import TrendingVideos from "./components/TrendingVideos";

const App = () => (
  <div className="container">
    <h1>Hello World React</h1>
    {/* <Button /> */}
    {/* <ShopItem/> */}
    <TrendingVideos />
  </div>
);
ReactDOM.render(<App/>,document.getElementById('app'));
