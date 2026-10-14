import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';

describe('TV Settings Validation', function () {

    this.timeout(60000);

    let driver:any;

    before(async function () {

        driver = await launchTV();

    });

    it('Open Settings', async function () {

        await driver.pressKeyCode(3);
        await driver.pause(3000);

        // Go to settings icon
        for(let i=0; i<8; i++) {

            await driver.pressKeyCode(22);
            await driver.pause(500);

        }

        await driver.pressKeyCode(23);
        await driver.pause(5000);

        const source =
            await driver.getPageSource();

        await driver.saveScreenshot(
            './screenshots/settings.png'
        );

        console.log(source);

        assert(
            source.length > 0,
            'Settings page not opened'
        );

    });

    after(async function () {

        if(driver){
            await driver.deleteSession();
        }

    });

});