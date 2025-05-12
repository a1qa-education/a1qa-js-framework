import BasePage from '../../framework/page/BasePage.js'
import { Button, Label } from '../../framework/elements/index.js'
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js'

class MainPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Welcome to the-internet'), 'Welcom Label'), 'Main Page');

        this.navigationLink = (text) => new Button(PreciseTextLocator(text), `Navigation link: ${text}`);
    }

    async clickNavigationLink(navigationText) {
        await this.navigationLink(navigationText).click();
    }
}

export default new MainPage();