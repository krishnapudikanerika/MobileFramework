export class ProductsPage {

    constructor(
        private driver: any
    ) {}

    async getPageSource() {

        return await this.driver.getPageSource();

    }

    async takeScreenshot() {

        await this.driver.saveScreenshot(
            './screenshots/product-page.png'
        );

    }

    async selectFirstProduct() {

        const products =
            await this.driver.$$(
                'id=com.saucelabs.mydemoapp.android:id/productIV'
            );

        await products[0].click();

    }

    async addToCart() {

        const cartButton =
            await this.driver.$(
                'id=com.saucelabs.mydemoapp.android:id/cartBt'
            );

        await cartButton.click();

    }

}