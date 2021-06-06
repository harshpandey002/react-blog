import React from "react";
import Filter from "../Filter/Filter";
import BlogDetails from "../../components/blog/BlogDetails/BlogDetails";
import Action from "../../components/blog/Action/Action";

import "./Blog.css";
import "../style.css";

function Blog({ setFilter }) {
  return (
    <div className="Page">
      <Filter setFilter={setFilter} />
      <BlogDetails />
      <Action />
    </div>
  );
}

export default Blog;
