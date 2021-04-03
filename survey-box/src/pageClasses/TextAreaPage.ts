import IPage from "./IPage";
import { TEXT_AREA_PAGE, TEXT_AREA } from "../services/pageConstants";
import IQuestion from "./IQuestion";
import INextClick from "./INextClick";

export default class TextAreaPage implements IPage, IQuestion, INextClick {
  pageType: string;
  questionType: string;
  id: number;
  background: string;
  buttonFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;

  constructor(id: number) {
    this.pageType = TEXT_AREA_PAGE;
    this.questionType = TEXT_AREA;
    this.id = id;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#6d7175";
    this.buttonTextColor = "#ffffff";
  }
}
