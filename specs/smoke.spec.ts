
import { browser } from '@wdio/globals';

describe('Smoke', () => {
  it('checks the current app screen', async () => {
    const pageSource = await browser.getPageSource();

    console.log(' APP UI SOURCE START');
    console.log(pageSource);
    console.log(' APP UI SOURCE END ');
  });
});
