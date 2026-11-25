
import { browser } from '@wdio/globals';

describe('FrontRow Search Tests', () => {

  it('TC04 - Verify event search functionality', async () => {

    const searchInput = await browser.$('~Search events');

    await searchInput.waitForDisplayed({
      timeout: 15000
    });

    await searchInput.setValue('Midnight Howl');

    await browser.pause(2000);

    const event = await browser.$('~Midnight Howl Live in Brooklyn at Warsaw');

    const isDisplayed = await event.isDisplayed();

    if (!isDisplayed) {
      throw new Error('Searched event is not displayed');
    }

    console.log('PASS: Search functionality is working');

  });

});
