export class BasePage {

    constructor(
        protected driver: any
    ) {}

    async wait(seconds: number) {

        await this.driver.pause(
            seconds * 1000
        );

    }

    async getSource() {

        return await this.driver.getPageSource();

    }

    async screenshot(name: string) {

        await this.driver.saveScreenshot(
            `./screenshots/${name}.png`
        );

    }

}