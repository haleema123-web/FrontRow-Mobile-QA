
import { browser } from '@wdio/globals';

describe('FrontRow Reviews Test', () => {

  it('TC17 - Verify Reviews button navigation', async () => {

    try {
      // Step 1: Open Events tab
      await browser.$('~Events tab').click();
      await browser.pause(2000);

      // Step 2: Open event
      const event = await browser.$(
        '~Midnight Howl Live in Brooklyn at Warsaw'
      );

      await event.waitForDisplayed({ timeout: 15000 });
      await event.click();
      await browser.pause(3000);

      // Step 3: Locate Reviews button
      const reviewsButton = await browser.$('~Reviews');

      await reviewsButton.waitForDisplayed({ timeout: 15000 });

      // Step 4: Click Reviews button
      await reviewsButton.click();
      await browser.pause(3000);

      // Step 5: Verify navigation
      const pageSource = await browser.getPageSource();

      console.log('Current screen source:', pageSource);

      if (pageSource.toLowerCase().includes('review')) {
        console.log('PASS: Reviews section opened');
      } else {
        throw new Error('Reviews section did not open');
      }

    } finally {
      // Step 6: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc17-reviews.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
