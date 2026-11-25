
import { browser } from '@wdio/globals';

describe('FrontRow Events Tests', () => {

  it('TC02 - Verify Events screen is displayed', async () => {

    const searchInput = await browser.$('~Search events');

    await searchInput.waitForDisplayed({
      timeout: 15000
    });

    const isVisible = await searchInput.isDisplayed();

    if (!isVisible) {
      throw new Error('Events screen is not displayed');
    }

    console.log('PASS: Events screen is displayed');
    console.log('PASS: Search field is visible');

  });

});
