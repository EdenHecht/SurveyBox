import express from "express";
import {
  handleGetSurvey,
  createNewSurvey,
  createNewPage,
} from "../controllers/survey.js";

const router = express.Router();

router.get("/", handleGetSurvey);
router.post("/survey", createNewSurvey);
router.post("/survey/:id", createNewPage);

export default router;
