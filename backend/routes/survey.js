import express from "express";
import {
  handleGetSurvey,
  createNewSurvey,
  createNewPage,
  getSurvey,
} from "../controllers/survey.js";

const router = express.Router();

router.get("/", handleGetSurvey);
router.post("/survey", createNewSurvey);
router.post("/survey/:id", createNewPage);
router.get("/survey/:id", getSurvey);

export default router;
