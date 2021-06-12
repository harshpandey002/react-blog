import axios from "axios";

const url = "http://localhost:5000/story";

export const fetchStory = () => axios.get(url);
export const createStory = (newStory) => axios.post(url, newStory);
export const updateStory = (updatedPost) => axios.patch(url, updatedPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
