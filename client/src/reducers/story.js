import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  // LIKE,
} from "../constants/actionTypes";

const story = (story = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return [...story];
    case CREATE:
      return [...story, action.payload];
    case UPDATE:
      return story.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case DELETE:
      return story.filter((post) => post.id !== action.payload);
    default:
      return [...story];
  }
};

export default story;
