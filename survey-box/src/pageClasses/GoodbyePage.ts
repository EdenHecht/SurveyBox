import IPage from "./IPage";
import IStatementPage from "./IStatementPage";
import { GOODBYE_PAGE } from "../services/pageConstants";

export default class GoodbyePage implements IPage, IStatementPage {
  pageType: string;
  id: number;
  background: string;
  buttonFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;
  headerFontSize: number;
  headerColor: string;
  headerText: string;

  constructor(id: number) {
    this.pageType = GOODBYE_PAGE;
    this.id = id;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#6d7175";
    this.buttonTextColor = "#ffffff";
    this.headerFontSize = 24;
    this.headerColor = "#6d7175";
    this.headerText = "GoodBye!";
  }
}
