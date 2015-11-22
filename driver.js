var
  wb = require('selenium-webdriver'),
  options = {
    desiredCapabilities: {
      browserName: 'chrome'
    }
  },
  driver;

driver = new wb.Builder()
  .usingServer('http://localhost:4444/wd/hub')
  .withCapabilities({
    'browserName': 'firefox'
  })
  .build();

module.exports = driver;