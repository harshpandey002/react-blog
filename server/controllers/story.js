import StoryMessage from "../models/StoryMessage.js"

export const getStory = async (req, res) => {
    try {
        const storyMessages = await StoryMessage.find()

        res.status(200).json(storyMessages)
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createStory = async (req, res) => {
    const story = req.body;

    const newStory = new postMessage(post);
    
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
