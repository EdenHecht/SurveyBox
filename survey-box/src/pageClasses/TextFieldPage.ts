import IPage from "./IPage";
import {TEXT_FIELD_PAGE, TEXT_FIELD} from "../services/pageConstants"
import IQuestion from "./IQuestion";

export default class TextFieldPage implements IPage, IQuestion {
    pageType: string;
    questionType: string;
    id: number;

    constructor(id: number) {
        this.pageType = TEXT_FIELD_PAGE; 
        this.questionType = TEXT_FIELD;
        this.id = id;
    }
}