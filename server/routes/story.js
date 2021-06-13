import express from "express";

import {
  getStory,
  createStory,
  updateStory,
  deleteStory,
} from "../controllers/story.js";

const router = express.Router();

router.get("/", getStory);
router.post("/", createStory);
router.patch("/", updateStory);
router.delete("/:id", deleteStory);

export default router;
