import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import DataTablesPage from '../pageObjects/DataTablesPage.js'
import { assert } from 'chai'

const expectedSum = 251;
const currencySign = '$';

describe('Data Table test', function () {
    it('Check sum if column lines', async function () {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        await MainPage.clickNavigationLink('Sortable Data Tables');

        const dueArray = await (await DataTablesPage.getColumnValues()).map(element => parseFloat(element.replace(currencySign, '')));
        //Calculate sum of elements from dueArray

        assert.strictEqual(dueSum, expectedSum, 'Sum of due column values is not correct');
    })
})