import { GET_FAV, FAV, UNFAV } from "../constants/actionTypes";

//Action Creator

export const getFav = () => async (dispatch) => {
  dispatch({ type: GET_FAV });
};

export const addFav = (story) => async (dispatch) => {
  dispatch({ type: FAV, payload: story });
};

export const unFav = (id) => async (dispatch) => {
  dispatch({ type: UNFAV, payload: id });
};
