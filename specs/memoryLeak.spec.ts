import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Test', () => {

  it('TC33 - Monitor memory during navigation', async () => {

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
      const initial = getMemory();

      const events = await browser.$('~Events tab');
      const profile = await browser.$('~Profile tab');

      for (let i = 0; i < 10; i++) {
        await profile.click();
        await events.click();
      }

      const final = getMemory();
      const growth = final - initial;

      console.log('Initial Memory:', initial, 'KB');
      console.log('Final Memory:', final, 'KB');
      console.log('Memory Growth:', growth, 'KB');

      console.log(growth > 20480 ? 'WARNING: Memory growth detected' : 'No significant memory growth detected');

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\tc33-memory-monitoring.png'
      );
    }

  });

});