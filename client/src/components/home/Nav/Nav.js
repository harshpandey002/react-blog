import React, { useRef, useEffect } from "react";

//Router
import { useHistory } from "react-router-dom";

//uuid
import { v4 as uuidv4 } from "uuid";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRandom, faAdjust } from "@fortawesome/free-solid-svg-icons";

//Redux
import { useDispatch } from "react-redux";
import { createStory } from "../../../actions/story";

//Demo Data
import { demoData } from "../demoData";

//CSS
import "./Nav.css";

function Nav({ demo, setDemo, dark, setDark }) {
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
    <div className={`Nav ${dark ? `Nav-dark` : ""}`}>
      <div onClick={handleClick} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="btn--name">
          <span className="navText">New Story</span>
        </div>
      </div>
      <div ref={hide} onClick={demoHandler} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faRandom} />
        </div>
        <div className="btn--name">
          <span className="navText">Demo Stories</span>
        </div>
      </div>
      <div onClick={() => setDark(!dark)} className="btn theme">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faAdjust} />
        </div>
        <div className="btn--name">
          <span className="hideText">Switch </span>
          <span className="navText">Theme</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
