import StoryMessage from "../models/StoryMessage.js";

export const getStory = async (req, res) => {
  try {
    const storyMessages = await StoryMessage.find();

    res.status(200).json(storyMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStory = async (req, res) => {
  const story = req.body;

  const newStory = new StoryMessage(story);

  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateStory = async (req, res) => {
  const story = req.body;
  const _id = story._id;

  const updatedStory = await StoryMessage.findByIdAndUpdate(_id, story, {
    new: true,
  });

  res.json(updatedStory);
};

export const deleteStory = async (req, res) => {
  const { id: _id } = req.params;

  await StoryMessage.findByIdAndRemove(_id);

  res.json({ message: "post deleted successfully" });
};
