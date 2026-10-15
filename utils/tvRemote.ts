export async function up(driver:any) {
    await driver.pressKeyCode(19);
}

export async function down(driver:any) {
    await driver.pressKeyCode(20);
}

export async function left(driver:any) {
    await driver.pressKeyCode(21);
}

export async function right(driver:any) {
    await driver.pressKeyCode(22);
}

export async function ok(driver:any) {
    await driver.pressKeyCode(23);
}

export async function home(driver:any) {
    await driver.pressKeyCode(3);
}

export async function home(driver:any) {

    await driver.pressKeyCode(3);
    await driver.pause(2000);

}