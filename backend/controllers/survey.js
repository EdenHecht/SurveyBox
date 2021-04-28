import Page from "../models/pageModel.js";
import Survey from "../models/surveyModel.js";

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
  const page = req.body;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No survey with id: ${_id}`);
  let survey = await Survey.findById(_id);
  survey.pages.push(page);

  try {
    await survey.save();
    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ error });
  }
};
