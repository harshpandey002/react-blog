import React, { useState } from "react";
import FileBase from "react-file-base64";
import "./Form.css";

function Form() {
  const [blog, setBlog] = useState({ title: "", category: "", thumbnail: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="Action">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input
          id="title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          type="text"
        />
        <label htmlFor="category"></label>
        <select
          id="category"
          value={blog.category}
          onChange={(e) => setBlog({ ...blog, category: e.target.value })}
        >
          <option value="" disabled selected>
            Category
          </option>
          <option value="Business">Business</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          <option value="Health">Health</option>
          <option value="Programming">Programming</option>
        </select>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setBlog({ ...blog, thumbnail: base64 })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
