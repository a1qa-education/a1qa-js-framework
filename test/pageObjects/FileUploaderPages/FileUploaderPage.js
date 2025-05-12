import { Label, Input, Button } from '../../../framework/elements/index.js'
import BasePage from '../../../framework/page/BasePage.js'
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js'

class FileUploaderPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('File Uploader')), 'File Uploader Page');

        this.fileUploadInput = new Input('[id="file-upload"]', 'File Upload Input Field');
        this.submitButton = new Button('[id="file-submit"]', 'Submit Button');
    }

    async uplaodFile(path) {
        await this.fileUploadInput.typeText(path);
        await this.submitButton.click();
    }
}

export default new FileUploaderPage();