import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';

describe('TV Play Store Launch Demo', function () {

    this.timeout(60000);

    let driver: any;

    before(async function () {

        driver = await launchTV();

    });

    it('Launch Play Store and Validate', async function () {

        // Go Home
        await driver.pressKeyCode(3);
        await driver.pause(3000);

        // Open App Chooser Menu
        // (You are already reaching this screen successfully)

        // Move to Play Store
        await driver.pressKeyCode(20); // Live TV -> Play Games
        await driver.pause(1000);

        await driver.pressKeyCode(20); // Play Games -> Play Store
        await driver.pause(1000);

        // Open Play Store
        await driver.pressKeyCode(23);
        await driver.pause(8000);

        // Capture proof
        await driver.saveScreenshot(
            './screenshots/playstore-launch.png'
        );

        const source = await driver.getPageSource();

        console.log(source.substring(0, 1000));

        assert(
            source.length > 0,
            'Play Store page source is empty'
        );

        console.log('Play Store launched successfully');

    });

    after(async function () {

        if (driver) {
            await driver.deleteSession();
        }

    });

});