import IPage from "./IPage";
import { WELCOME_PAGE } from "../services/pageConstants";

export default class WelcomePage implements IPage {
  pageType: string;
  id: number;
  background: string;
  buttonFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;

  constructor(id: number) {
    this.pageType = WELCOME_PAGE;
    this.id = id;
    this.background = "#ffffff";
    this.buttonFontSize = 17;
    this.buttonBackground = "#6d7175";
    this.buttonTextColor = "#ffffff";
  }
}
