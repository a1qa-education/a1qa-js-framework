import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import FileUploaderPage from '../pageObjects/FileUploaderPages/FileUploaderPage.js'
import UploadedFilesPage from '../pageObjects/FileUploaderPages/UploadedFilesPage.js'
import { assert } from 'chai'
import * as path from 'path';

const fileName = 'test.txt';
const fullPathToFile = path.resolve(`./upload/${fileName}`);

//Implement test block 