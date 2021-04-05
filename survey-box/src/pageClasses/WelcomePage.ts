import IPage from "./IPage";
import { WELCOME_PAGE } from "../services/pageConstants";
import IStatementPage from "./IStatementPage";
import INextClick from "./INextClick";

export default class WelcomePage implements IPage, IStatementPage, INextClick {
  pageType: string;
  id: number;
  pageName: string;
  background: string;
  buttonFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;
  headerFontSize: number;
  headerColor: string;
  headerText: string;
  subHeaderFontSize: number;
  subHeaderColor: string;
  subHeaderText: string;

  constructor(id: number) {
    this.pageType = WELCOME_PAGE;
    this.id = id;
    this.pageName = `Page ${id}`;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#437B83";
    this.buttonTextColor = "#ffffff";
    this.headerFontSize = 50;
    this.headerColor = "#dabe49";
    this.headerText = "Welcome!";
    this.subHeaderFontSize = 25;
    this.subHeaderColor = "#234e52";
    this.subHeaderText = "Let's start the survey!";
  }
}
