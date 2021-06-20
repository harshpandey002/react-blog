import React from "react";

//Components
import Info from "./Info/Info";
import Blogs from "./Blogs/Blogs";

//CSS
import "./Main.css";

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
