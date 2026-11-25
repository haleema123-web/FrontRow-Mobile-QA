
import { browser } from '@wdio/globals';

describe('FrontRow Profile Tests', () => {

  it('TC10 - Verify Profile screen', async () => {

    try {
      const profileTab = await browser.$('~Profile tab');

      await profileTab.waitForDisplayed({ timeout: 15000 });
      await profileTab.click();

      await browser.pause(3000);

      const pageSource = await browser.getPageSource();

      if (!pageSource.includes('Profile')) {
        throw new Error('Profile screen did not load');
      }

      console.log('PASS: Profile screen is displayed');

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\tc10-profile.png'
      );

      console.log('Screenshot capture attempted');
    }

  });

});
