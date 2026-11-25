
import { browser } from '@wdio/globals';

describe('FrontRow Event Details Tests', () => {

  it('TC08 - Verify Event Details screen', async () => {

    try {
      const event = await browser.$(
        '~Midnight Howl Live in Brooklyn at Warsaw'
      );

      await event.waitForDisplayed({ timeout: 15000 });
      await event.click();

      await browser.pause(3000);

      const pageSource = await browser.getPageSource();

      console.log('Event Details Source:', pageSource);

      if (
        !pageSource.includes('eventDetail.title') &&
        !pageSource.includes('Midnight Howl Live in Brooklyn')
      ) {
        throw new Error('Event Details screen not detected');
      }

      console.log('PASS: Event Details screen verified');

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\tc08-eventdetails.png'
      );

      console.log('Screenshot capture attempted');
    }

  });

});
