import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import DynamicControlsPage from '../pageObjects/DynamicControlsPage.js'
import { assert } from 'chai'

describe('Dynamic Controls Test', function () {
    it.only('Check state of Dynamic control', async function () {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        await MainPage.clickNavigationLink('Dynamic Controls');

        await DynamicControlsPage.clickEnableButton();
        assert.isTrue(await DynamicControlsPage.isInputFieldEnabled(), 'Input field on Dynamic Controls Page does not enabled');

        const randomString = crypto.randomUUID();
        await DynamicControlsPage.inputTextIntoInputField(randomString);
        assert.strictEqual(await DynamicControlsPage.getText(), randomString, 'Wrong text into input field');
    })
})