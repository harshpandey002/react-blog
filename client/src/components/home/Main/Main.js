import React from "react";
import "./Main.css";
import Info from "./Info/Info";
import Blogs from "./Blogs/Blogs";

function Main() {
  return (
    <div className="Main">
      <Info />
      <div className="blogs">
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
      </div>
    </div>
  );
}

export default Main;
