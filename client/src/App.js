import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Blog from "./pages/Blog/Blog";

//Redux
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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStory());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/blog/:id" component={Blog} />
          <Route path="/edit/:id" component={Edit} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
