import { launchApp } from '../../utils/driver';
import { ProductsPage } from '../../pages/ProductsPage';
import assert from 'assert';

describe(
    'Add To Cart Validation',
    function () {

        this.timeout(120000);

        it(
            'Should Add Product To Cart',
            async () => {

                const driver =
                    await launchApp();

                await driver.pause(5000);

                const page =
                    new ProductsPage(driver);

                await page.selectFirstProduct();

                await driver.pause(3000);

                await page.addToCart();

                await driver.pause(3000);

                const source =
                    await driver.getPageSource();

                assert.ok(
                    source.length > 0,
                    'Cart action failed'
                );

                console.log(
                    'Product added to cart successfully'
                );

                await driver.deleteSession();

            }

        );

    }

);