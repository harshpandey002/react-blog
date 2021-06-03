import React, { useState } from "react";
import Editor from "../../components/edit/Editor/Editor";
import Form from "../../components/edit/Form/Form";

import "./Edit.css";
import "../style.css";

function Edit() {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    thumbnail: "",
    description: "",
  });

  return (
    <div className="Page">
      <div className="empty"></div>
      <Editor blog={blog} setBlog={setBlog} />
      <Form blog={blog} setBlog={setBlog} />
    </div>
  );
}

export default Edit;
