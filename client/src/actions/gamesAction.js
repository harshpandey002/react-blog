import axios from "axios";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(
    "https://api.rawg.io/api/games?key=a8ce4f4d40da41459a13256a033a6850&dates=2020-01-01,2021-12-30"
  );

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};

//a8ce4f4d40da41459a13256a033a6850
