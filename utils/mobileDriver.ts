import { remote } from 'webdriverio';
import { mobileCapabilities } from '../capabilities/mobileCapabilities';

export async function launchApp() {

    const driver = await remote({
        hostname: '127.0.0.1',
        port: 4723,
        path: '/',
        capabilities: mobileCapabilities
    });

    return driver;
}