import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/story";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default Home;
