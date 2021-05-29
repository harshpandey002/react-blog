import React from "react";
import "./Blog.css";
import Filter from "../Filter/Filter";
import BlogDetails from "../../components/blog/BlogDetails/BlogDetails";
import Action from "../../components/blog/Action/Action";

function Blog() {
  return (
    <div>
      <h1>BLOG PAGE</h1>
      <Filter />
      <BlogDetails />
      <Action />
    </div>
  );
}

export default Blog;
