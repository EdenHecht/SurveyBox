import IPage from "./IPage";
import {GOODBYE_PAGE} from "../services/pageConstants"

export default class GoodbyePage implements IPage {
    pageType: string;
    id:number;

    constructor(id: number) {
        this.pageType = GOODBYE_PAGE; 
        this.id = id;
    }
}