import { browser } from '@wdio/globals';

describe('FrontRow Events Tests', () => {
  it('TC02 - Capture current screen', async () => {
    await browser.pause(5000);

    await browser.saveScreenshot(
      'C:\\Users\\HP\\frontrow\\tests\\appium\\tc02-screen.png'
    );

    console.log('Screenshot captured');
  });
});