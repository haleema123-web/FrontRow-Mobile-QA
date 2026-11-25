
import { browser } from '@wdio/globals';

describe('FrontRow Settings Test', () => {

  it('TC20 - Verify Settings navigation', async () => {

    try {
      // Step 1: Open Profile tab
      await browser.$('~Profile tab').click();
      await browser.pause(2000);

      // Step 2: Locate Settings button
      const settingsButton = await browser.$('~Settings');

      await settingsButton.waitForDisplayed({ timeout: 15000 });

      // Step 3: Click Settings
      await settingsButton.click();
      await browser.pause(3000);

      // Step 4: Verify Settings screen
      const pageSource = await browser.getPageSource();

      console.log('Current screen:', pageSource);

      if (pageSource.toLowerCase().includes('settings')) {
        console.log('PASS: Settings screen opened');
      } else {
        throw new Error('Settings screen did not open');
      }

    } finally {
      // Step 5: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc20-settings.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
