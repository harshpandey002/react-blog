import React from "react";

//Icons
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

//Router
import { useHistory, useParams } from "react-router-dom";

//CSS
import "./Filter.css";

function Filter({ filter, setFilter, dark }) {
  const history = useHistory();

  const filterHandler = (check, name = "category") => {
    if (useParams) {
      history.push("/home");
    }
    setFilter({
      filterName: name,
      filterCheck: check,
    });
  };

  return (
    <div className={`Filter ${dark ? `Filter-dark` : ""}`}>
      <div
        onClick={() => filterHandler("global", "global")}
        className={`btn ${filter.filterCheck === "global" ? `selected` : ``}`}
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </div>
        <div className="btn--name">Global</div>
      </div>
      <div
        onClick={() => filterHandler("business")}
        className={`btn ${filter.filterCheck === "business" ? `selected` : ``}`}
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faIdCard} />
        </div>
        <div className="btn--name">Business</div>
      </div>
      <div
        onClick={() => filterHandler("entertainment")}
        className={`btn ${
          filter.filterCheck === "entertainment" ? `selected` : ``
        }`}
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="btn--name">Entertainment</div>
      </div>
      <div
        onClick={() => filterHandler("sports")}
        className={`btn ${filter.filterCheck === "sports" ? `selected` : ``}`}
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faVolleyballBall} />
        </div>
        <div className="btn--name">Sports</div>
      </div>
      <div
        onClick={() => filterHandler("health")}
        className={`btn ${filter.filterCheck === "health" ? `selected` : ``}`}
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <div className="btn--name">Health</div>
      </div>
      <div
        onClick={() => filterHandler("programming")}
        className={`btn ${
          filter.filterCheck === "programming" ? `selected` : ``
        }`}
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="btn--name">Programming</div>
      </div>
      <div
        onClick={() => filterHandler("", "like")}
        className={`btn ${filter.filterName === "like" ? `selected` : ``}`}
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="btn--name">Favourite</div>
      </div>
    </div>
  );
}

export default Filter;
