# WebdriverIO-Appium-Browserstack

Code samples to get started with Appium tests for your Native App using WebdriverIO.

## Installation

You should have a .env file at root level with below format
```bash
BROWSERSTACK_USERNAME: <BROWSERSTACK_USERNAME>
BROWSERSTACK_ACCESS_KEY: <BROWSERSTACK_ACCESS_KEY>
APKPATH: <local/apk/path/appName.apk>
```

## Node Libraries Installation
```bash
npm install
```

## Execution

```run
npx wdio run ./wdio.conf.js
```

## Now Check your BrowserStack Dashboard you can see your execution. 