import React from "react";
import Filter from "../Filter/Filter";
import Editor from "../../components/edit/Editor/Editor";
import Form from "../../components/edit/Form/Form";

function Edit() {
  return (
    <div>
      <h1>EDIT PAGE</h1>
      <Filter />
      <Editor />
      <Form />
    </div>
  );
}

export default Edit;
