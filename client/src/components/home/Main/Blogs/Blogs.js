import React, { useEffect } from "react";

//Redux
import { useSelector } from "react-redux";

//Router
import { useHistory } from "react-router-dom";
import moment from "moment";

import "./Blogs.css";

function Blogs({ filter, setFilter }) {
  const history = useHistory();
  const story = useSelector((state) => state.story);
  let store = [];

  switch (filter.filterName) {
    case "category":
      store = story.filter((post) => post.category == filter.filterCheck);
      break;
    case "like":
      store = story.filter((post) => post.like == true);
      break;
    case "global":
      store = story;
      break;
  }

  console.log(filter.filterCheck);

  const cardHandler = (id) => {
    history.push(`/blog/${id}`);
  };

  return (
    <>
      <div className="Blogs">
        {store.map((story) => (
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
      {!store.length && filter.filterCheck && (
        <p>
          Either Create <strong>New Story</strong> or Generate{" "}
          <strong>Demo Stories</strong>{" "}
        </p>
      )}
      {!store.length && !filter.filterCheck && (
        <p>
          You don't <strong>Like</strong> any story as of now
        </p>
      )}
    </>
  );
}

export default Blogs;
