var
  driver = require('../driver'),
  config = require('../config'),
  signinPage = require('../modules/sign-in.js'),
  should = require('should');

describe('Sign-it works correct: ', function () {

  // Open site before
  before(function (done) {
    this.timeout(15000);
    driver
      .get(config.siteURL)
      .then(done);

  });

  it('should login', function(done) {
    signinPage.fillForm();
    signinPage.signinButton().click()
      .then(function () {
        return signinPage.mainMenuUserName().getText();
      })
      .then(function (value) {
        should(value).be.eql("testname userlastname");
        done();
      });
  });

  it('should exit', function (done) {
    signinPage.exit()
      .then(function () {
        return signinPage.loginWithButton().getText();
      })
      .then(function (value) {
        should(value).be.eql('Войти с помощью');
        done();
      });
  });

  after(function(done) {
    driver.quit().then(done);
  });
});