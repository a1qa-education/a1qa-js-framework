import path from 'node:path';
import fs from 'fs-extra';

export const downloadDir = path.resolve('./tmp');

export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],

    onPrepare: function () {
        fs.ensureDir(downloadDir);
    },

    after: function (result, capabilities, specs) {
        fs.emptyDir(downloadDir);
    },

    afterScenario: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
