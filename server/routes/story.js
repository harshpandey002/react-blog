import express from "express";

import { getStory, createStory, updateStory } from "../controllers/story.js";

const router = express.Router();

router.get("/", getStory);
router.post("/", createStory);
router.patch("/", updateStory);

export default router;
