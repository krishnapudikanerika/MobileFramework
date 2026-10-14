import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';

describe('Android TV Smoke Test', function () {

    this.timeout(60000);

    let driver: any;

    before(async function () {
        driver = await launchTV();
    });

    it('TV Navigation Demo', async function () {

        await driver.pause(3000);

        await driver.pressKeyCode(21); // LEFT
        await driver.pause(3000);

        await driver.pressKeyCode(22); // RIGHT
        await driver.pause(3000);

        await driver.pressKeyCode(19); // UP
        await driver.pause(3000);

        await driver.pressKeyCode(20); // DOWN
        await driver.pause(3000);

    });

    after(async function () {
        await driver.deleteSession();
    });

});