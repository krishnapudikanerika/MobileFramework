import { remote } from 'webdriverio';

export async function launchApp() {

    return await remote({

        hostname: '127.0.0.1',
        port: 4723,
        path: '/',

        capabilities: {

            platformName: 'Android',

            'appium:automationName': 'UiAutomator2',

            'appium:deviceName': 'Android Emulator',

            'appium:autoGrantPermissions': true,

            'appium:noReset': false,

            'appium:newCommandTimeout': 120,

            'appium:app': './apps/mda-2.3.0-27.apk',

            'appium:appWaitForLaunch': false,

            'appium:appWaitDuration': 60000
        }
    });
}