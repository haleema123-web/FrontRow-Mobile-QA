
import { browser } from '@wdio/globals';

describe('FrontRow Share Event Test', () => {

  it('TC16 - Verify Share Event button is displayed', async () => {

    try {
      // Step 1: Open Events tab
      await browser.$('~Events tab').click();
      await browser.pause(2000);

      // Step 2: Open an event
      const event = await browser.$(
        '~Midnight Howl Live in Brooklyn at Warsaw'
      );

      await event.waitForDisplayed({ timeout: 15000 });
      await event.click();
      await browser.pause(3000);

      // Step 3: Locate Share button
      const shareButton = await browser.$('~Share event');

      await shareButton.waitForDisplayed({ timeout: 15000 });

      // Step 4: Verify Share button
      if (await shareButton.isDisplayed()) {
        console.log('PASS: Share Event button is displayed');
      } else {
        throw new Error('Share Event button is not displayed');
      }

    } finally {
      // Step 5: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc16-share-event.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
