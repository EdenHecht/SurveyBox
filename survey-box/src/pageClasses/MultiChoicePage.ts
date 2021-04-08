import IPage from "./IPage";
import { MULTI_CHOICE_PAGE, SELECTION } from "../services/pageConstants";
import IQuestion from "./IQuestion";
import INextClick from "./INextClick";

export default class MultiChoicePage implements IPage, IQuestion, INextClick {
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
    this.pageType = MULTI_CHOICE_PAGE;
    this.questionType = SELECTION;
    this.id = id;
    this.pageName = `Page ${id}`;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#d4b207";
    this.buttonTextColor = "#ffffff";
    this.questionColor = "#437b83";
    this.questionFontSize = 35;
    this.questionText = "What's your question?";
    this.answersColor = "#262727";
    this.answersFontSize = 21;
    this.answersText = new Array<string>("Option 1");
  }
}
