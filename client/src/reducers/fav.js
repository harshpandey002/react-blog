import { FAV, UNFAV, GET_FAV } from "../constants/actionTypes";

const fav = (fav = [], action) => {
  switch (action.type) {
    case GET_FAV:
      return [...fav];
    case FAV:
      return [...fav, action.payload];
    case UNFAV:
      return fav.filter((post) => post.id !== action.payload);
    default:
      return [...fav];
  }
};

export default fav;
