import express from "express";
import { handleGetSurvey, createNewSurvey } from "../controllers/survey.js";

const router = express.Router();

router.get("/", handleGetSurvey);
router.post("/survey", createNewSurvey);

export default router;
