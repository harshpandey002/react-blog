import { useState } from "react";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Blog from "./pages/Blog/Blog";

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
  const [dark, setDark] = useState(true);
  const [demo, setDemo] = useState(false);
  const [filter, setFilter] = useState({
    filterName: "global",
    filterCheck: "global",
  });

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
