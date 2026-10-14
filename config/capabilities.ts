import path from 'path';

const appPath = path.resolve(
    process.cwd(),
    'apps',
    'mda-2.3.0-27.apk'
);

export const androidCapabilities = {

    platformName: 'Android',

    'appium:automationName': 'UiAutomator2',

    'appium:deviceName': 'Android Emulator',

    'appium:noReset': false,

    'appium:autoGrantPermissions': true,

    'appium:newCommandTimeout': 120,

    'appium:app': appPath,

    'appium:appWaitForLaunch': false
};
