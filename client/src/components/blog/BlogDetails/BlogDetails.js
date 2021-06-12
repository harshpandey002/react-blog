import React from "react";

//Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Router
import { useParams } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

import "./BlogDetails.css";

function BlogDetails({ dark }) {
  const params = useParams();
  const story = useSelector((state) =>
    state.story.filter((post) => {
      if (post._id === params.id) {
        return post;
      }
    })
  )[0];

  return (
    <div className={`BlogDetails ${dark ? `BlogDetails-dark` : ""}`}>
      <ReactQuill
        // theme="snow"
        readOnly
        modules={{ toolbar: [] }}
        value={story ? story.blogData : " "}
      />
    </div>
  );
}

export default BlogDetails;
