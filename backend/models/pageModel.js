import mongoose from "mongoose";

const pageSchema = mongoose.Schema(
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
  { _id: false }
);

const Page = mongoose.model("Page", pageSchema);
export default Page;
