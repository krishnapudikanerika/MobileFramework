import { launchApp } from '../../utils/driver';
import assert from 'assert';

describe('App Launch Validation', function () {

    this.timeout(60000);

    it('Should Launch App', async () => {

        const driver = await launchApp();

        await driver.pause(5000);

        const currentPackage =
            await driver.getCurrentPackage();

        console.log(
            `Current Package: ${currentPackage}`
        );

        assert.ok(driver.sessionId);

        await driver.pause(10000);

        await driver.deleteSession();

    });

});