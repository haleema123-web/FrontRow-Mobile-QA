
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Navigation', () => {

  it('Memory leak during navigation', async () => {

    const adb = 'C:\\Users\\HP\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe';
    const pkg = 'app.frontrow.qa';

    const getMemory = () => {
      const output = execSync(`"${adb}" shell dumpsys meminfo ${pkg}`, {
        encoding: 'utf8'
      });
      const match = output.match(/TOTAL PSS:\s+(\d+)/);
      if (!match) throw new Error('Memory reading failed');
      return Number(match[1]);
    };

    try {
      const events = await browser.$('~Events tab');
      const profile = await browser.$('~Profile tab');

      for (let i = 1; i <= 15; i++) {
        await profile.click();
        await browser.pause(1000);
        await events.click();
        await browser.pause(1000);

        console.log(`Cycle ${i}: ${getMemory()} KB`);
      }

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-navigation.png'
      );
    }

  });

});
