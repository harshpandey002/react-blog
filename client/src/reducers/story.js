import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

const story = (story = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return [...story];
    case CREATE:
      return [...story, action.payload];
    default:
      return [...story];
  }
};

export default story;
