import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./Editor.css";

function Editor({ blog, setBlog }) {
  const modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  return (
    <div className="Editor">
      <ReactQuill
        theme="snow"
        placeholder="Start typing here..."
        modules={modules}
        value={blog.blogData}
        onChange={(e) => setBlog({ ...blog, blogData: e })}
      />
    </div>
  );
}

export default Editor;
