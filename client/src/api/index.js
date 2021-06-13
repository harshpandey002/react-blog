import axios from "axios";

const url = "https://react-medium.herokuapp.com/story";

export const fetchStory = () => axios.get(url);
export const createStory = (newStory) => axios.post(url, newStory);
export const updateStory = (updatedPost) => axios.patch(url, updatedPost);
export const deleteStory = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
