import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

import * as api from "../api/index";

//Action Creator

export const getStory = () => async (dispatch) => {
  const { data } = await api.fetchStory();
  try {
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStory = (story) => async (dispatch) => {
  dispatch({ type: CREATE, payload: story });
};

export const updateStory = (story) => async (dispatch) => {
  dispatch({ type: UPDATE, payload: story });
};

export const deleteStory = (id) => async (dispatch) => {
  dispatch({ type: DELETE, payload: id });
};

export const likeStory = (id) => async (dispatch) => {
  dispatch({ type: LIKE, payload: id });
};
