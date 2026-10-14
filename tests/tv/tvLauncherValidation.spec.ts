import assert from 'assert';
import { launchTV } from '../../utils/tvDriver';
import { TvLauncherPage } from '../../pages/tv/TvLauncherPage';

describe('TV Launcher Validation', function () {

    this.timeout(60000);

    let driver: any;
    let launcher: TvLauncherPage;

    before(async function () {

        driver = await launchTV();
        launcher = new TvLauncherPage(driver);

    });

    it('Verify TV Launcher Opens', async function () {

        const source =
            await launcher.getPageSource();

        await launcher.takeScreenshot(
            'tv-home'
        );

        assert(
            source.length > 0,
            'TV launcher page source empty'
        );

        console.log(
            'TV Launcher validated'
        );

    });

    after(async function () {

        if(driver){
            await driver.deleteSession();
        }

    });

});