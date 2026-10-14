import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';

describe('Launch Settings Directly', function () {

    this.timeout(60000);

    let driver:any;

    before(async function () {

        driver = await launchTV();

    });

    it('Launch Settings', async function () {

        await driver.execute(
            'mobile: shell',
            {
                command: 'am',
                args: [
                    'start',
                    '-n',
                    'com.android.tv.settings/.MainSettings'
                ]
            }
        );

        await driver.pause(5000);

        const source =
            await driver.getPageSource();

        await driver.saveScreenshot(
            './screenshots/settings-direct.png'
        );

        assert(
            source.length > 0,
            'Settings not launched'
        );

    });

    after(async function () {

        if(driver){
            await driver.deleteSession();
        }

    });

});