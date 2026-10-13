import { launchApp } from '../utils/driver';
import assert from 'assert';

describe('App Launch Validation', function () {

    this.timeout(120000);

    it('Should Create Session', async () => {

        const driver = await launchApp();

        const sessionId = driver.sessionId;

        console.log(`Session ID: ${sessionId}`);

        assert.ok(sessionId);

        await driver.pause(5000);

        await driver.deleteSession();

    });

});