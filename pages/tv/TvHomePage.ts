export class TvHomePage {

    constructor(private driver:any){}

    async getCurrentPackage() {
        return await this.driver.getCurrentPackage();
    }

    async getCurrentActivity() {
        return await this.driver.getCurrentActivity();
    }

}