import axios from "axios";
import { CREATE, FETCH_ALL } from "../constants/actionTypes";

//Action Creator

export const getStory = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL });
};

export const createStory = (story) => async (dispatch) => {
  dispatch({ type: CREATE, payload: story });
};
