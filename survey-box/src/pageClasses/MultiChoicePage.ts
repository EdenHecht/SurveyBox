import IPage from "./IPage";
import {MULTI_CHOICE_PAGE, MULTI_CHOICE} from "../services/pageConstants"
import IQuestion from "./IQuestion";

export default class MultiChoicePage implements IPage, IQuestion {
    pageType: string;
    questionType: string;

    constructor() {
        this.pageType = MULTI_CHOICE_PAGE; 
        this.questionType = MULTI_CHOICE;
    }
}