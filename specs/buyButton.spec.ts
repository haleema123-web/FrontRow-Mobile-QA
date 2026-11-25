
import { browser } from '@wdio/globals';

describe('FrontRow Buy Button Test', () => {

  it('TC15 - Verify Buy button is displayed', async () => {

    try {
      // Step 1: Open Events tab
      await browser.$('~Events tab').click();
      await browser.pause(2000);

      // Step 2: Locate event
      const event = await browser.$(
        '~Midnight Howl Live in Brooklyn at Warsaw'
      );

      await event.waitForDisplayed({ timeout: 15000 });
      await event.click();
      await browser.pause(3000);

      // Step 3: Locate Buy button
      const buyButton = await browser.$(
        '~Buy · $45.00'
      );

      await buyButton.waitForDisplayed({ timeout: 15000 });

      // Step 4: Verify Buy button
      if (await buyButton.isDisplayed()) {
        console.log('PASS: Buy button is displayed with correct price');
      } else {
        throw new Error('Buy button is not displayed');
      }

    } finally {
      // Step 5: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc15-buy-button.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
