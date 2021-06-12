import React, { useState } from "react";
import Editor from "../../components/edit/Editor/Editor";
import Form from "../../components/edit/Form/Form";

import "./Edit.css";
import "../style.css";

function Edit({ dark }) {
  const [blog, setBlog] = useState({
    _id: "",
    title: "",
    description: "",
    category: "",
    blogData: "",
  });

  return (
    <div className="Page EditRoute">
      <div className="empty"></div>
      <Editor dark={dark} blog={blog} setBlog={setBlog} />
      <Form dark={dark} blog={blog} setBlog={setBlog} />
    </div>
  );
}

export default Edit;
