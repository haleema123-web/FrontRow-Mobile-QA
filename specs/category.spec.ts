
import { browser } from '@wdio/globals';

describe('FrontRow Category Filter Tests', () => {

  it('TC05 - Verify All category filter', async () => {

    try {
      const searchInput = await browser.$('~Search events');

      await searchInput.waitForDisplayed({ timeout: 15000 });
      await searchInput.clearValue();

      const allCategory = await browser.$('~All');

      await allCategory.waitForDisplayed({ timeout: 15000 });
      await allCategory.click();

      await browser.pause(2000);

      const event = await browser.$(
        '~Midnight Howl Live in Brooklyn at Warsaw'
      );

      await event.waitForDisplayed({ timeout: 15000 });

      console.log('PASS: All category filter is working');

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\tc05-allcategory.png'
      );

      console.log('Screenshot capture attempted');
    }

  });

});
