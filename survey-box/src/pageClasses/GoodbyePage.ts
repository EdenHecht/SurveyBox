import IPage from "./IPage";
import {GOODBYE_PAGE} from "../services/pageConstants"

export default class GoodbyePage implements IPage {
    pageType: string;

    constructor() {
        this.pageType = GOODBYE_PAGE; 
    }
}