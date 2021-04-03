import IPage from "./IPage";
import { ONE_CHOICE_PAGE, ONE_CHOICE } from "../services/pageConstants";
import IQuestion from "./IQuestion";
import INextClick from "./INextClick";

export default class OneChoicePage implements IPage, IQuestion, INextClick {
  pageType: string;
  questionType: string;
  id: number;
  background: string;
  buttonFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;

  constructor(id: number) {
    this.pageType = ONE_CHOICE_PAGE;
    this.questionType = ONE_CHOICE;
    this.id = id;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#6d7175";
    this.buttonTextColor = "#ffffff";
  }
}
