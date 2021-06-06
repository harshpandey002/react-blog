import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRandom, faAdjust } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { createStory } from "../../../actions/story";
import { demoData } from "../demoData";
import "./Nav.css";

function Nav({ demo, setDemo }) {
  const hide = useRef(null);
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (demo) {
      hide.current.style.display = "none";
      return;
    }
  }, [demo]);

  const handleClick = () => {
    history.push(`/edit/${uuidv4()}`);
  };

  const demoHandler = () => {
    setDemo(true);
    demoData.forEach((post) => {
      dispatch(createStory(post));
    });
  };

  return (
    <div className="Nav">
      <div onClick={handleClick} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="btn--name">New Story</div>
      </div>
      <div ref={hide} onClick={demoHandler} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faRandom} />
        </div>
        <div className="btn--name">Demo Stories</div>
      </div>
      <div className="btn theme">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faAdjust} />
        </div>
        <div className="btn--name">Switch Theme</div>
      </div>
    </div>
  );
}

export default Nav;
