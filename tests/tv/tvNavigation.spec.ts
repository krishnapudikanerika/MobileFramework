import { launchTV } from '../../utils/tvDriver';
import * as remote from '../../utils/tvRemote';

describe('TV Navigation',()=>{

    let driver:any;

    before(async ()=>{

        driver = await launchTV();

    });

    it('Navigate Right', async ()=>{

        await remote.pressRight(driver);

        await driver.pause(2000);

        await remote.pressRight(driver);

        await driver.pause(2000);

        await remote.pressOk(driver);

    });

    after(async ()=>{

        await driver.deleteSession();

    });

});