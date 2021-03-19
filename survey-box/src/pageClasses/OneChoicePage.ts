import IPage from "./IPage";
import {GOODBYE_PAGE, ONE_CHOICE} from "../services/pageConstants"
import IQuestion from "./IQuestion";

export default class OneChoisePage implements IPage, IQuestion {
    pageType: string;
    questionType: string;

    constructor() {
        this.pageType = GOODBYE_PAGE; 
        this.questionType = ONE_CHOICE;
    }
}