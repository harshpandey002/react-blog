import React, { useState } from "react";
import Editor from "../../components/edit/Editor/Editor";
import Form from "../../components/edit/Form/Form";

import { motion } from "framer-motion";

import "./Edit.css";
import "../style.css";
import { container } from "../../animation/animate";

function Edit({ dark }) {
  const [blog, setBlog] = useState({
    _id: "",
    title: "",
    description: "",
    category: "",
    blogData: "",
  });

  return (
    <motion.div
      className="Page EditRoute"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="empty"></div>
      <Editor dark={dark} blog={blog} setBlog={setBlog} />
      <Form dark={dark} blog={blog} setBlog={setBlog} />
    </motion.div>
  );
}

export default Edit;
