import Page from "../models/pageModel.js";
import Survey from "../models/surveyModel.js";

export const handleGetSurvey = (req, res) => {
  res.send("working!");
};

export const createNewSurvey = async (req, res) => {
  const survey = req.body;
  const newSurvey = new Survey(survey);

  try {
    await newSurvey.save();
    res.status(201).json(newSurvey);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createNewPage = async (req, res) => {
  const page = req.body;

  const newSurvey = new Survey({ pages: [page] });
  try {
    await newSurvey.save();
    res.status(201).json(newSurvey);
  } catch (error) {
    res.status(400).json({ error });
  }
};
