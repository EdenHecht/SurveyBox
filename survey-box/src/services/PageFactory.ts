import axios from "axios";
import {
  WELCOME_PAGE,
  GOODBYE_PAGE,
  TEXT_AREA_PAGE,
  TEXT_FIELD_PAGE,
  ONE_CHOICE_PAGE,
  MULTI_CHOICE_PAGE,
} from "./pageConstants";
import GoodbyePage from "../pageClasses/GoodbyePage";
import WelcomePage from "../pageClasses/WelcomePage";
import TextAreaPage from "../pageClasses/TextAreaPage";
import TextFieldPage from "../pageClasses/TextFieldPage";
import OneChoicePage from "../pageClasses/OneChoicePage";
import MultiChoicePage from "../pageClasses/MultiChoicePage";
import IPage from "../pageClasses/IPage";

let pagesIdCounter = 0;
const url = "http://localhost:5000";

export const createNewSurvey = (pages: [], surveyName: string) => {
  const urlsurevy = `${url}/survey`;
  axios
    .post(urlsurevy, { pages: pages, surveyName: surveyName })
    .then(
      (res) =>
        (window.location.href = `${window.location.href}survey/${res.data._id}`)
    )
    .catch((err) => err);
};

let buildPage = (pageType: string): IPage | null => {
  let newPage = null;
  switch (pageType) {
    case WELCOME_PAGE:
      newPage = new WelcomePage(pagesIdCounter++);
      break;
    case GOODBYE_PAGE:
      newPage = new GoodbyePage(pagesIdCounter++);
      break;
    case TEXT_AREA_PAGE:
      newPage = new TextAreaPage(pagesIdCounter++);
      break;
    case TEXT_FIELD_PAGE:
      newPage = new TextFieldPage(pagesIdCounter++);
      break;
    case ONE_CHOICE_PAGE:
      newPage = new OneChoicePage(pagesIdCounter++);
      break;
    case MULTI_CHOICE_PAGE:
      newPage = new MultiChoicePage(pagesIdCounter++);
      break;

    default:
      return null;
  }
  axios
    .post(url, newPage)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return newPage;
};

export default buildPage;
