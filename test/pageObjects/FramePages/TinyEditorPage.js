import { Label } from '../../../framework/elements/index.js'
import BasePage from '../../../framework/page/BasePage.js'
import { PartialTextLocator } from '../../../framework/utils/locatorHelper.js'

class TinyEditorPage extends BasePage {
    constructor() {
        super(new Label(PartialTextLocator('An iFrame')), 'iFrame Page');

        //Implement elements 
    }

    //Implement methods
}

//Export Page