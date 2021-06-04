import { FETCH_ALL, CREATE, UPDATE } from "../constants/actionTypes";

//Action Creator

export const getStory = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL });
};

export const createStory = (story) => async (dispatch) => {
  dispatch({ type: CREATE, payload: story });
};

export const updateStory = (story) => async (dispatch) => {
  dispatch({ type: UPDATE, payload: story });
};
