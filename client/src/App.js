import "./App.css";
import Home from "./pages/Home";
import Filter from "./components/Filter";
import Blog from "./pages/Blog";

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <div>
        <Filter />
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
