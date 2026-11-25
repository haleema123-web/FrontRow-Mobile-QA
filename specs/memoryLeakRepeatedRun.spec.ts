
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Idle', () => {

  it('Check memory after idle time', async () => {

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
      const before = getMemory();
      console.log(`Before Idle: ${before} KB`);

      await browser.pause(60000);

      const after = getMemory();
      console.log(`After Idle: ${after} KB`);
      console.log(`Memory Difference: ${after - before} KB`);

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-idle.png'
      );
    }

  });

});
