import IPage from "./IPage";
import {TEXT_AREA_PAGE, TEXT_AREA} from "../services/pageConstants"
import IQuestion from "./IQuestion";

export default class TextAreaPage implements IPage, IQuestion {
    pageType: string;
    questionType: string;

    constructor() {
        this.pageType = TEXT_AREA_PAGE; 
        this.questionType = TEXT_AREA;
    }
}