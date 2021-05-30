import React from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVolleyballBall,
  faPlusCircle,
  faHeart,
  faCode,
  faGlobeAmericas,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

function Filter() {
  return (
    <div className="Filter">
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </div>
        <div className="btn--name">Global</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faIdCard} />
        </div>
        <div className="btn--name">Business</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="btn--name">Entertainment</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faVolleyballBall} />
        </div>
        <div className="btn--name">Sports</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <div className="btn--name">Health</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="btn--name">Programming</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="btn--name">Favourite</div>
      </div>
    </div>
  );
}

export default Filter;
