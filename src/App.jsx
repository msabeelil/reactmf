import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TrendingVideos from "./components/TrendingVideos";

const App = () => (
  <div className="container">
    <TrendingVideos />
  </div>
);

ReactDOM.render(<App/>,document.getElementById('app'));
