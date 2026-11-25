
import { browser } from '@wdio/globals';

describe('FrontRow Back Navigation Test', () => {

  it('TC14 - Verify back navigation from Event Details to Events screen', async () => {

    try {
      // Step 1: Open Events tab
      const eventsTab = await browser.$('~Events tab');
      await eventsTab.click();
      await browser.pause(2000);

      // Step 2: Locate an event
      const event = await browser.$(
        '~Midnight Howl Live in Brooklyn at Warsaw'
      );

      await event.waitForDisplayed({ timeout: 15000 });
      await event.click();
      await browser.pause(3000);

      // Step 3: Verify Event Details screen
      let pageSource = await browser.getPageSource();

      if (!pageSource.includes('eventDetail.title')) {
        throw new Error('Event Details screen did not open');
      }

      console.log('Event Details screen opened');

      // Step 4: Click Back button
      const backButton = await browser.$(
        '~Navigate up'
      );

      await backButton.waitForDisplayed({ timeout: 15000 });
      await backButton.click();
      await browser.pause(3000);

      // Step 5: Verify Events screen
      pageSource = await browser.getPageSource();

      if (pageSource.includes('screen.events')) {
        console.log('PASS: Back navigation successful');
      } else {
        throw new Error('Back navigation failed');
      }

    } finally {
      // Step 6: Screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc14-back-navigation.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
