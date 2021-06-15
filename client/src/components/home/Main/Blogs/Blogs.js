import React from "react";

//Redux
import { useSelector } from "react-redux";

//Router
import { useHistory } from "react-router-dom";
import moment from "moment";

import { motion, AnimateSharedLayout } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRandom } from "@fortawesome/free-solid-svg-icons";
import "./Blogs.css";
import { blogCard, container, parent } from "../../../../animation/animate";

function Blogs({ filter, dark }) {
  const history = useHistory();
  const story = useSelector((state) => state.story);

  let store = [];

  switch (filter.filterName) {
    case "category":
      store = story.filter((post) => post.category === filter.filterCheck);
      break;
    case "like":
      store = story.filter((post) => post.like === true);
      break;
    case "global":
      store = story;
      break;
    default:
      return;
  }

  const cardHandler = (id) => {
    history.push(`/blog/${id}`);
  };

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <motion.div
          className="Blogs"
          variants={parent}
          initial="hidden"
          animate="show"
        >
          {store.map((story) => (
            <>
              <motion.div
                key="key"
                className={`card ${dark ? `card-dark` : ""}`}
                onClick={() => cardHandler(story._id)}
                variants={blogCard}
              >
                <div className={`desc ${dark ? `desc-dark` : ""}`}>
                  <p>{story.title}</p>
                  <p>{story.description}</p>
                </div>
                <div className={`footer ${dark ? `footer-dark` : ""}`}>
                  <p>{story.category}</p>
                  <p>{moment(story.created).fromNow()}</p>
                </div>
              </motion.div>
            </>
          ))}
        </motion.div>
      </AnimateSharedLayout>
      {!store.length && filter.filterCheck && (
        <p className={`altText ${dark ? `altText-dark` : ""}`}>
          Either Create <FontAwesomeIcon className="plusIcon" icon={faPlus} />
          <strong className="plus"> New Story</strong> or Generate{" "}
          <FontAwesomeIcon className="genIcon" icon={faRandom} />
          <strong className="gen"> Demo Stories</strong>
        </p>
      )}
      {!store.length && !filter.filterCheck && (
        <p className={`altText ${dark ? `altText-dark` : ""}`}>
          You don't <strong>Like</strong> any story as of now
        </p>
      )}
    </>
  );
}

export default Blogs;
