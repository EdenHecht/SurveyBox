import IPage from "./IPage";
import {WELCOME_PAGE} from "../services/pageConstants"

export default class WelcomePage implements IPage {
    pageType: string;

    constructor() {
        this.pageType = WELCOME_PAGE; 
    }
}