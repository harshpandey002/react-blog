import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const story = (story = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...story, action.payload];
    case UPDATE:
      return story.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return story.filter((post) => post._id !== action.payload);
    default:
      return [...story];
  }
};

export default story;
