import { expect } from 'chai';
import { launchTV } from '../../utils/tvDriver';
import { TvHomePage } from '../../pages/tv/TvHomePage';

describe('Android TV Smoke Test', () => {

    let driver:any;
    let homePage:any;

    before(async () => {

        driver = await launchTV();
        homePage = new TvHomePage(driver);

    });

    it('TV should launch successfully', async () => {

        const activity =
            await homePage.getCurrentActivity();

        console.log(activity);

        expect(activity).to.not.equal(null);

    });

    after(async () => {

        if(driver){
            await driver.deleteSession();
        }

    });

});