import React from "react";
import Filter from "../Filter/Filter";
import Editor from "../../components/edit/Editor/Editor";
import Form from "../../components/edit/Form/Form";

import "./Edit.css";
import "../style.css";

function Edit() {
  return (
    <div className="Page">
      <Filter />
      <Editor />
      <Form />
    </div>
  );
}

export default Edit;
