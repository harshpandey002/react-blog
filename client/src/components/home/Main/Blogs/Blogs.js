import React, { useEffect } from "react";

//Redux
import { useSelector } from "react-redux";

//Router
import { useHistory } from "react-router-dom";
import moment from "moment";

import "./Blogs.css";

function Blogs({ filter }) {
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
            <div className="card" onClick={() => cardHandler(story.id)}>
              <div className="desc">
                <p>{story.title}</p>
                <p>{story.description}</p>
              </div>
              <div className="footer">
                <p>{story.category}</p>
                <p>{moment(story.created).fromNow()}</p>
              </div>
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
