import Page from "../models/pageModel.js";
import Survey from "../models/surveyModel.js";
import mongoose from "mongoose";

export const handleGetSurvey = (req, res) => {
  res.send("working!");
};

export const createNewSurvey = async (req, res) => {
  const survey = req.body;
  const newSurvey = new Survey({
    surveyName: survey.surveyName,
    pages: survey.pages,
  });
  newSurvey.markModified("surveyName");
  try {
    await newSurvey.save();
    res.status(201).json(newSurvey);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createNewPage = async (req, res) => {
  const pages = req.body;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No survey with id: ${_id}`);
  let survey = await Survey.findById(_id);
  survey.pages = pages;

  try {
    await Survey.findByIdAndUpdate(_id, survey, { new: true });

    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getSurvey = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const survey = await Survey.findById(_id);
    res.status(200).json(survey);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
