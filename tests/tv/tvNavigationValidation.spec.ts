import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';

describe('TV Navigation Validation', function () {

    this.timeout(60000);

    let driver:any;

    before(async function () {
        driver = await launchTV();
    });

    it('Navigate Across Launcher', async function () {

        await driver.pressKeyCode(21);
        await driver.pause(2000);

        await driver.pressKeyCode(22);
        await driver.pause(2000);

        await driver.pressKeyCode(19);
        await driver.pause(2000);

        await driver.pressKeyCode(20);
        await driver.pause(2000);

        await driver.saveScreenshot(
            './screenshots/tv-navigation.png'
        );

        assert(true);

    });

    after(async function () {

        if(driver){
            await driver.deleteSession();
        }

    });

});