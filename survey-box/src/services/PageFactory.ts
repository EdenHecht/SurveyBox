import {WELCOME_PAGE, GOODBYE_PAGE,TEXT_AREA_PAGE,TEXT_FIELD_PAGE,ONE_CHOICE_PAGE,MULTI_CHOICE_PAGE} from "./pageConstants"
import GoodbyePage from "../pageClasses/GoodbyePage"
import WelcomePage from "../pageClasses/WelcomePage"
import TextAreaPage from "../pageClasses/TextAreaPage"
import TextFieldPage from "../pageClasses/TextFieldPage"
import OneChoicePage from "../pageClasses/OneChoicePage"
import MultiChoicePage from "../pageClasses/MultiChoicePage"
import IPage from "../pageClasses/IPage"


let pagesIdCounter = 0;

let buildPage = (pageType: string):IPage|null => {
    switch (pageType) {
        case WELCOME_PAGE:
            return new WelcomePage(pagesIdCounter++);
        case GOODBYE_PAGE:
            return new GoodbyePage(pagesIdCounter++);
        case TEXT_AREA_PAGE:
            return new TextAreaPage(pagesIdCounter++);
        case TEXT_FIELD_PAGE:
            return new TextFieldPage(pagesIdCounter++);
        case ONE_CHOICE_PAGE:
            return new OneChoicePage(pagesIdCounter++);
        case MULTI_CHOICE_PAGE:
            return new MultiChoicePage(pagesIdCounter++);
    
        default:
            return null;
    }
}

export default buildPage