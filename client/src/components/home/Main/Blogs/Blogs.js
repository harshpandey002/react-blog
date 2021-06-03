import React from "react";

//REDUX
import { useSelector } from "react-redux";

import "./Blogs.css";

function Blogs() {
  const story = useSelector((state) => state.story);
  return (
    <div className="Blogs">
      {story.map((story) => (
        <>
          <div className="card"></div>
        </>
      ))}
    </div>
  );
}

export default Blogs;
