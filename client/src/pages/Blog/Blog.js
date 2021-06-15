import React from "react";
import Filter from "../Filter/Filter";
import BlogDetails from "../../components/blog/BlogDetails/BlogDetails";
import Action from "../../components/blog/Action/Action";
import { motion } from "framer-motion";

import "./Blog.css";
import "../style.css";
import { container } from "../../animation/animate";

function Blog({ notify, setFilter, dark }) {
  return (
    <motion.div
      className="Page BlogRoute"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Filter dark={dark} setFilter={setFilter} />
      <BlogDetails dark={dark} />
      <Action notify={notify} dark={dark} />
    </motion.div>
  );
}

export default Blog;
