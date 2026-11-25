
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Image Loading', () => {

  it('Check memory after loading events', async () => {

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
      await (await browser.$('~Events tab')).click();
      await browser.pause(5000);

      console.log(`Initial Memory: ${getMemory()} KB`);

      for (let i = 1; i <= 5; i++) {
        await browser.pause(3000);
        console.log(`Reading ${i}: ${getMemory()} KB`);
      }

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-image-loading.png'
      );
    }

  });

});
