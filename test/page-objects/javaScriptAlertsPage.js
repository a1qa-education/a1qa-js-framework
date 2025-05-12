import BasePage from '../../framework/page/BasePage.js'
import { Label, Button } from '../../framework/elements/index.js'
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js'
import Browser from '../../framework/browser/Browser.js'

class JavaScriptAlertsPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('JavaScript Alerts')), 'JavaScript Alerts Page');

        this.forJSAlertButton = new Button('//*[@onclick="jsAlert()"]', 'JS Akert Button');
        this.resultLabel = new Label('//*[@id="result"]', 'Result Label');
    }

    async clickForJSAlertButton() {
        await this.forJSAlertButton.click();
    }

    async acceptJSAlert() {
        await Browser.Dialog.acceptDialog();
    }

    async getResultText() {
        return this.resultLabel.getText();
    }
}

export default new JavaScriptAlertsPage();