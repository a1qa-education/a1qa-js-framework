import BasePage from '../../../framework/page/BasePage.js'
import { Label, Button } from '../../../framework/elements/index.js'
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js'

class DifferentFramesPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Frames')), 'Frames Page');

        this.iFrameButton = new Button('//*[@href="/iframe"]', 'iFrame Button');
    }

    async clickIFrameButton() {
        await this.iFrameButton.click();
    }
}

export default new DifferentFramesPage();