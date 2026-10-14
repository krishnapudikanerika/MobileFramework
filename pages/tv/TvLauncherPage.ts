export class TvLauncherPage {

    constructor(private driver: any) {}

    async getPageSource() {
        return await this.driver.getPageSource();
    }

    async takeScreenshot(name: string) {
        await this.driver.saveScreenshot(
            `./screenshots/${name}.png`
        );
    }

}