FrontRow Mobile QA  Appium Automation

Project Overview

This repository contains mobile application automation tests for FrontRow, developed using Appium, WebdriverIO, TypeScript, and Mocha.

The purpose of this project is to evaluate the application's functionality, navigation, user interactions, and performance through automated mobile testing.

Tech Stack

- Automation Tool: Appium
- Automation Framework: WebdriverIO
- Programming Language: TypeScript
- Test Framework: Mocha
- Platform: Android
- Test Device: Android Emulator
- Android Version: 17

Testing Environment

| Configuration | Details |
|||
| Platform tested | Android |
| Device | Android Emulator |
| Android version | 17 |
| Automation | Appium |
| Test runner | WebdriverIO |
| Test framework | Mocha |

Note: Android emulator testing has been performed. iOS configuration is included but has not been verified.

Test Coverage

The automation suite includes the following areas:

- Application launch and smoke testing
- Login and logout
- Forgot password
- Event listing and event details
- Category selection
- Search functionality
- Ticket purchase and My Tickets
- Profile and edit profile
- Settings
- Reviews
- Share event
- Back navigation
- Memory monitoring and performance-related scenarios

Project Structure

text
FrontRow-Mobile-QA/
│
├── specs/
│   ├── login.spec.ts
│   ├── logout.spec.ts
│   ├── applaunch.spec.ts
│   ├── searchFunctionality.spec.ts
│   ├── memoryLeak.spec.ts
│   └── ...
│
├── screenshots/
│   └── Test execution evidence
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── wdio.android.conf.ts
├── wdio.ios.conf.ts
├── wdio.shared.conf.ts
├── .gitignore
└── README.md


 Prerequisites

- Node.js and npm
- Java JDK
- Android Studio
- Android SDK and Platform Tools
- Android Emulator
- Appium and UiAutomator2 driver

 Installation

Clone the repository:

bash
git clone https://github.com/haleema123-web/FrontRow-Mobile-QA.git
cd FrontRow-Mobile-QA


Install dependencies:

bash
npm install


Install the Android driver:

bash
npx appium driver install uiautomator2


Configure Android APK

Build or obtain an installable FrontRow Android APK.

Set its location in PowerShell:

powershell
$env:ANDROID_APK_PATH="C:\path\to\app-debug.apk"


Start an Android emulator before executing tests.

Execute Tests

Run the complete Android automation suite:

bash
npm run android


Run TypeScript type checking:

bash
npm run typecheck


Test Evidence

Screenshots are maintained as evidence of application screens and test execution.

Test results may vary depending on application state, emulator configuration, and backend availability.

Project Status

- Android Appium automation: Implemented
- Android Emulator testing: Performed
- iOS automation configuration: Included, not tested
- Automated test results: Documented through test execution evidence

Purpose

This project demonstrates practical experience in:

- Mobile application automation
- Appium and WebdriverIO
- TypeScript-based test development
- Functional testing
- Navigation and UI testing
- Performance and memory-related test scenarios
- Test execution and evidence collection



QA Automation Portfolio Project