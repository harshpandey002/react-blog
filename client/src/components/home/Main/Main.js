import React from "react";
import "./Main.css";
import Info from "./Info/Info";
import Blogs from "./Blogs/Blogs";

function Main({ filter, dark }) {
  return (
    <div className="Main">
      <Info />
      <div className="blogs">
        <Blogs dark={dark} filter={filter} />
      </div>
    </div>
  );
}

export default Main;
