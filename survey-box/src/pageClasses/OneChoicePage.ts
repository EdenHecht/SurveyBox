import IPage from "./IPage";
import {ONE_CHOICE_PAGE, ONE_CHOICE} from "../services/pageConstants"
import IQuestion from "./IQuestion";

export default class OneChoicePage implements IPage, IQuestion {
    pageType: string;
    questionType: string;
    id: number;
    
    constructor(id: number) {
        this.pageType = ONE_CHOICE_PAGE; 
        this.questionType = ONE_CHOICE;
        this.id = id;
    }
}