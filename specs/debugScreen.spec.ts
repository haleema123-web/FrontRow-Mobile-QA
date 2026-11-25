
import { browser } from '@wdio/globals';

describe('FrontRow Debug Screen Test', () => {

  it('TC22 - Verify Debug screen opens', async () => {

    try {
      // Step 1: Locate Debug tab
      const debugTab = await browser.$('~Debug tab');

      await debugTab.waitForDisplayed({ timeout: 15000 });

      // Step 2: Click Debug tab
      await debugTab.click();

      await browser.pause(3000);

      // Step 3: Get screen source
      const pageSource = await browser.getPageSource();

      console.log('Debug screen source:', pageSource);

      // Step 4: Verify Debug screen
      if (pageSource.toLowerCase().includes('debug')) {
        console.log('PASS: Debug screen opened successfully');
      } else {
        throw new Error('Debug screen verification failed');
      }

    } finally {
      // Step 5: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc22-debug-screen.png'
        );

        console.log('Screenshot captured');

      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
