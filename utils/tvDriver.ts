import { remote } from 'webdriverio';
import { tvCapabilities } from '../capabilities/tvCapabilities';

export async function launchTV() {

    const driver = await remote({
        hostname: '127.0.0.1',
        port: 4723,
        path: '/',
        capabilities: tvCapabilities
    });

    return driver;
}