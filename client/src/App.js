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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const notify = (messege) => {
    toast.dark(messege, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
            render={() => (
              <Blog
                notify={notify}
                filter={filter}
                setFilter={setFilter}
                dark={dark}
              />
            )}
          />
          <Route
            path="/edit/:id"
            render={() => <Edit notify={notify} dark={dark} />}
          />
          <Redirect to="/home" />
        </Switch>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
