import mongoose from "mongoose";
import Page from "./pageModel.js";

const surveySchema = mongoose.Schema({
  pages: [
    {
      pageType: String,
      background: String,
      pageName: String,
      headerFontSize: Number,
      headerColor: String,
      headerText: String,
      subHeaderFontSize: Number,
      subHeaderColor: String,
      subHeaderText: String,
      questionType: String,
      questionColor: String,
      questionFontSize: Number,
      questionText: String,
      answersColor: String,
      answersFontSize: Number,
      answersText: [{ id: Number, text: String }],
      buttonFontSize: Number,
      buttonBackground: String,
      buttonTextColor: String,
    },
  ],
  surveyName: String,
});

const Survey = mongoose.model("Survey", surveySchema);
export default Survey;
