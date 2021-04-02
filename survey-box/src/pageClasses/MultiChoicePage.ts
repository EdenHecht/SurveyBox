import IPage from "./IPage";
import { MULTI_CHOICE_PAGE, MULTI_CHOICE } from "../services/pageConstants";
import IQuestion from "./IQuestion";

export default class MultiChoicePage implements IPage, IQuestion {
  pageType: string;
  questionType: string;
  id: number;
  background: string;
  buttonFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;

  constructor(id: number) {
    this.pageType = MULTI_CHOICE_PAGE;
    this.questionType = MULTI_CHOICE;
    this.id = id;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#6d7175";
    this.buttonTextColor = "#ffffff";
  }
}
