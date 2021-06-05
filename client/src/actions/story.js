import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

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

export const deleteStory = (id) => async (dispatch) => {
  dispatch({ type: DELETE, payload: id });
};

export const likeStory = (id) => async (dispatch) => {
  dispatch({ type: LIKE, payload: id });
};
