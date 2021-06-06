import React from "react";

//Redux
import { useSelector } from "react-redux";

//Router
import { useHistory } from "react-router-dom";
import moment from "moment";

import "./Blogs.css";

function Blogs() {
  const history = useHistory();
  const story = useSelector((state) => state.story);

  const cardHandler = (id) => {
    history.push(`/blog/${id}`);
  };

  return (
    <div className="Blogs">
      {story.map((story) => (
        <>
          <div onClick={() => cardHandler(story.id)} className="card">
            <h1>{story.title}</h1>
            <h2>{story.description}</h2>
            <h3>{story.category}</h3>
            <h4>{moment(story.created).fromNow()}</h4>
          </div>
        </>
      ))}
    </div>
  );
}

export default Blogs;
