import IPage from "./IPage";
import {WELCOME_PAGE} from "../services/pageConstants"

export default class WelcomePage implements IPage {
    pageType: string;
    id: number;

    constructor(id: number) {
        this.pageType = WELCOME_PAGE;
        this.id = id; 
    }
}