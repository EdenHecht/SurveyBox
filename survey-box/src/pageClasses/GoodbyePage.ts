import IPage from "./IPage";
import IStatementPage from "./IStatementPage";
import { GOODBYE_PAGE } from "../services/pageConstants";

export default class GoodbyePage implements IPage, IStatementPage {
  pageType: string;
  id: number;
  background: string;
  headerFontSize: number;
  headerColor: string;
  headerText: string;
  subHeaderFontSize: number;
  subHeaderColor: string;
  subHeaderText: string;

  constructor(id: number) {
    this.pageType = GOODBYE_PAGE;
    this.id = id;
    this.background = "#ffffff";
    this.headerFontSize = 50;
    this.headerColor = "#dabe49";
    this.headerText = "GoodBye!";
    this.subHeaderFontSize = 25;
    this.subHeaderColor = "#234e52";
    this.subHeaderText = "Thank you for taking the time to answer my survey!";
  }
}
