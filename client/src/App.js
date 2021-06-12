import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Blog from "./pages/Blog/Blog";

import { useDispatch } from "react-redux";
import { getStory } from "./actions/story";

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import "./Dark.css";

function App() {
  const dispatch = useDispatch();
  const [dark, setDark] = useState(false);
  const [demo, setDemo] = useState(false);
  const [filter, setFilter] = useState({
    filterName: "global",
    filterCheck: "global",
  });

  const body = document.querySelector("body");

  useEffect(() => {
    if (dark) {
      body.style.backgroundColor = "#0e0e0e";
    } else {
      body.style.backgroundColor = "#f3f3f3";
    }

    dispatch(getStory());
  }, [dark, dispatch]);

  return (
    <Router>
      <div className={`App ${dark ? `App-dark` : ""}`}>
        <Switch>
          <Route
            path="/home"
            render={() => (
              <Home
                demo={demo}
                filter={filter}
                setDemo={setDemo}
                setFilter={setFilter}
                dark={dark}
                setDark={setDark}
              />
            )}
          />
          <Route
            path="/blog/:id"
            render={() => <Blog setFilter={setFilter} dark={dark} />}
          />
          <Route path="/edit/:id" render={() => <Edit dark={dark} />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
