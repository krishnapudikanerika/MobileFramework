export class ScreenshotUtil {

    static async capture(
        driver: any,
        name: string
    ) {

        await driver.saveScreenshot(
            `./screenshots/${name}.png`
        );

    }

}