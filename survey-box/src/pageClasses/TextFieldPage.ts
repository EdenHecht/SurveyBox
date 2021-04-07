import IPage from "./IPage";
import { TEXT_FIELD_PAGE, TEXT } from "../services/pageConstants";
import IQuestion from "./IQuestion";
import INextClick from "./INextClick";

export default class TextFieldPage implements IPage, IQuestion, INextClick {
  pageType: string;
  questionType: string;
  id: number;
  pageName: string;
  background: string;
  buttonFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;
  questionColor: string;
  questionFontSize: number;
  questionText: string;
  answersColor: string;
  answersFontSize: number;
  answersText: Array<string>;

  constructor(id: number) {
    this.pageType = TEXT_FIELD_PAGE;
    this.questionType = TEXT;
    this.id = id;
    this.pageName = `Page ${id}`;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#6d7175";
    this.buttonTextColor = "#ffffff";
    this.questionColor = "#6d7175";
    this.questionFontSize = 35;
    this.questionText = "What's your question?";
    this.answersColor = "#262727";
    this.answersFontSize = 21;
    this.answersText = new Array<string>("Write your answer here");
  }
}
