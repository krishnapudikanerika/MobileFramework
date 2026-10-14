import { launchApp } from '../../utils/driver';
import assert from 'assert';

describe(
    'App Launch Validation',
    function () {

        this.timeout(60000);

        it(
            'Should Create Session',
            async () => {

                const driver =
                    await launchApp();

                assert.ok(
                    driver.sessionId
                );

                console.log(
                    `Session ID: ${driver.sessionId}`
                );

                await driver.deleteSession();

            }

        );

    }

);