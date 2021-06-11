import React from "react";
import Filter from "../Filter/Filter";
import BlogDetails from "../../components/blog/BlogDetails/BlogDetails";
import Action from "../../components/blog/Action/Action";

import "./Blog.css";
import "../style.css";

function Blog({ setFilter, dark }) {
  return (
    <div className="Page BlogRoute">
      <Filter dark={dark} setFilter={setFilter} />
      <BlogDetails dark={dark} />
      <Action dark={dark} />
    </div>
  );
}

export default Blog;
