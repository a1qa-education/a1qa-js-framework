import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import FileDownloaderPage from '../pageObjects/FileDownloaderPage.js'
import { assert } from 'chai'
import { downloadDir } from '../../framework/configs/main.wdio.conf.js'
import * as path from 'path'

const fileName = 'test.txt';
const downloadedFilePath = path.join(downloadDir, fileName);

describe('File Download Test', function () {
    it('Check that file downloaded', async function () {
        //Implement test case
    })
})