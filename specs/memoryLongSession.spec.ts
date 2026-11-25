
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Long Session', () => {

  it('Check memory during long session', async () => {

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
      for (let i = 0; i <= 2; i++) {
        console.log(`Reading ${i}: ${getMemory()} KB`);
        if (i < 2) await browser.pause(30000);
      }
    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-long-session.png'
      );
    }

  });

});
