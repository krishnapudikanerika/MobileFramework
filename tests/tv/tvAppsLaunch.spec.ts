import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';

describe('TV App Launch Validation', function () {

    this.timeout(60000);

    let driver:any;

    before(async function () {

        driver = await launchTV();

    });

    it('Open Apps Section', async function () {

        // Go Home
        await driver.pressKeyCode(3);
        await driver.pause(3000);

        // Navigate to Apps
        await driver.pressKeyCode(22);
        await driver.pause(1000);

        await driver.pressKeyCode(22);
        await driver.pause(1000);

        await driver.pressKeyCode(22);
        await driver.pause(1000);

        // Open Apps
        await driver.pressKeyCode(23);
        await driver.pause(5000);

        const source = await driver.getPageSource();

        await driver.saveScreenshot(
            './screenshots/apps-page.png'
        );

        assert(
            source.length > 0,
            'Apps page not opened'
        );

    });

    after(async function () {

        if(driver){
            await driver.deleteSession();
        }

    });

});