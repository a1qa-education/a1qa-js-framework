import { Given } from '@wdio/cucumber-framework'

import Browser from '../../framework/browser/Browser.js'
import MainPage from '../page-objects/mainPage.js'

Given(/^I am on the '(.*)' page$/, async (page) => {
    await Browser.openUrl('https://the-internet.herokuapp.com/');
    await MainPage.clickNavigationLink(page);
});