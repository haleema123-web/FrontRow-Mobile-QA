
import type { Options } from '@wdio/types';
import path from 'node:path';

import { sharedConfig } from './wdio.shared.conf';

const APK_PATH =
  process.env.ANDROID_APK_PATH ??
  path.resolve(
    __dirname,
    '../../android/app/build/outputs/apk/debug/app-debug.apk'
  );

export const config: Options.Testrunner = {
  ...sharedConfig,

  mochaOpts: {
    ...sharedConfig.mochaOpts,
    timeout: 120000,
  },

  capabilities: [
    {
      platformName: 'Android',

      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.ANDROID_DEVICE ?? 'emulator-5554',
      'appium:platformVersion': process.env.ANDROID_VERSION ?? '17',

      'appium:app': APK_PATH,
      'appium:appPackage': 'app.frontrow.qa',

      'appium:noReset': true,

      'appium:newCommandTimeout': 240,
    },
  ],
} as Options.Testrunner;
