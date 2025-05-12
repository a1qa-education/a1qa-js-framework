import { Label, Input, Button } from '../../framework/elements/index.js'
import BasePage from '../../framework/page/BasePage.js'
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js'

class DynamicControlsPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Dynamic Controls')), 'Dynamic Controls Page');

        this.enableButton = new Button('//*[@onclick="swapInput()"]', 'Enable Button');
        this.inputField = new Input('//input[@type="text"]', 'Input Field');
    }

    //Implement all methods for DynamicControlsTest
}

export default new DynamicControlsPage();