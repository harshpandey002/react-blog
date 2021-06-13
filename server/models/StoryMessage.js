import mongoose from "mongoose";

const storySchema = mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  category: String,
  blogData: String,
  like: Boolean,
});

const StoryMessage = mongoose.model("StoryMessage", storySchema);

export default StoryMessage;
