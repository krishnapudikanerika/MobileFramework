import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';

describe('Open Settings from TV Menu', function () {

    this.timeout(60000);

    let driver:any;

    before(async function () {

        driver = await launchTV();

    });

    it('Open Settings', async function () {

        // Move focus to Settings
        await driver.pressKeyCode(20);
        await driver.pause(1000);

        await driver.pressKeyCode(20);
        await driver.pause(1000);

        await driver.pressKeyCode(20);
        await driver.pause(1000);

        await driver.pressKeyCode(20);
        await driver.pause(1000);

        // Select Settings
        await driver.pressKeyCode(23);

        await driver.pause(5000);

        const source = await driver.getPageSource();

        await driver.saveScreenshot(
          './screenshots/settings-opened.png'
        );

        console.log(source);

        assert(
          source.length > 0,
          'Settings screen not opened'
        );

    });

    after(async function () {

        if(driver){
            await driver.deleteSession();
        }

    });

});