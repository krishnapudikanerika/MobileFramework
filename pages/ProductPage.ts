export class ProductPage {

    constructor(private driver: any) {}

    async getPageSource() {

        return await this.driver.getPageSource();

    }

}