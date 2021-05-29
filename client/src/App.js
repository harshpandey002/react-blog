import "./App.css";
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

function App() {
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
