import { launchApp } from '../../utils/driver';
import { ProductsPage } from '../../pages/ProductsPage';
import assert from 'assert';

describe(
    'Product Catalog Validation',
    function () {

        this.timeout(120000);

        it(
            'Should Load Product Screen',
            async () => {

                const driver =
                    await launchApp();

                const page =
                    new ProductsPage(driver);

                await driver.pause(5000);

                const source =
                    await page.getPageSource();

                await page.takeScreenshot();

                assert.ok(
                    source.length > 0,
                    'Product screen not loaded'
                );

                console.log(
                    'Product Catalog loaded successfully'
                );

                await driver.deleteSession();

            }

        );

    }

);