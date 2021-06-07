import React from "react";
import "./Main.css";
import Info from "./Info/Info";
import Blogs from "./Blogs/Blogs";

function Main({ filter, setFilter }) {
  return (
    <div className="Main">
      <Info />
      <div className="blogs">
        <Blogs filter={filter} />
      </div>
    </div>
  );
}

export default Main;
