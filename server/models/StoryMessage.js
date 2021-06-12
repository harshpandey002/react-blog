import mongoose from "mongoose";

const storySchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  blogData: String,
});

const StoryMessage = mongoose.model("StoryMessage", storySchema);

export default StoryMessage;
