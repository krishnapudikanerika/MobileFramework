import { remote } from 'webdriverio';
import { androidCapabilities }
from '../config/capabilities';

export async function launchApp() {

    return await remote({

        hostname: '127.0.0.1',

        port: 4723,

        path: '/',

        capabilities:
            androidCapabilities

    });

}