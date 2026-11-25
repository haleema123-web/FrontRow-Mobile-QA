
import { browser } from '@wdio/globals';

describe('FrontRow My Tickets Tests', () => {

  it('TC09 - Verify My Tickets screen', async () => {

    try {
      const myTicketsTab = await browser.$('~My Tickets tab');

      await myTicketsTab.waitForDisplayed({ timeout: 15000 });
      await myTicketsTab.click();

      await browser.pause(3000);

      const pageSource = await browser.getPageSource();

      if (!pageSource.includes('My Tickets')) {
        throw new Error('My Tickets screen did not load');
      }

      console.log('PASS: My Tickets screen is displayed');

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\tc09-mytickets.png'
      );

      console.log('Screenshot capture attempted');
    }

  });

});
