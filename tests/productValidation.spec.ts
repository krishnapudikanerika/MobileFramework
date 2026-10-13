import { launchApp } from '../utils/driver';
import { ProductPage } from '../pages/ProductPage';
import assert from 'assert';

describe('Product Catalog Validation', function () {

    this.timeout(120000);

    it('Should Launch Application Successfully', async () => {

        const driver = await launchApp();

        const page =
            new ProductPage(driver);

        const source =
            await page.getPageSource();

        console.log('Application launched');

        assert.ok(
            source.length > 0,
            'Application screen not loaded'
        );

        await driver.deleteSession();

    });

});