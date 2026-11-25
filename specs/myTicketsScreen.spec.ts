
import { browser } from '@wdio/globals';

describe('FrontRow My Tickets Screen Test', () => {

  it('TC21 - Verify My Tickets screen opens', async () => {

    try {
      // Step 1: Open My Tickets tab
      const ticketsTab = await browser.$('~My Tickets tab');

      await ticketsTab.waitForDisplayed({ timeout: 15000 });
      await ticketsTab.click();

      await browser.pause(3000);

      // Step 2: Get current screen source
      const pageSource = await browser.getPageSource();

      console.log('My Tickets screen source:', pageSource);

      // Step 3: Verify My Tickets screen
      if (
        pageSource.includes('screen.tickets') ||
        pageSource.toLowerCase().includes('my tickets')
      ) {
        console.log('PASS: My Tickets screen opened');
      } else {
        throw new Error('My Tickets screen verification failed');
      }

    } finally {
      // Step 4: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc21-my-tickets-screen.png'
        );

        console.log('Screenshot captured');

      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
