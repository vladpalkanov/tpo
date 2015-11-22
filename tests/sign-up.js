var
  driver = require('../driver'),
  config = require('../config'),
  signupPage = require('../modules/sign-up.js'),
  should = require('should');

describe('Sign-up works correct: ', function () {

  // Open site before
  before(function (done) {
    this.timeout(15000);
    driver
      .get(config.siteURL)
      .then(done);
  });

  beforeEach(function (done) {
    this.timeout(15000);
    done();
  });

  it('should open next tab', function (done) {
    signupPage.signUpButton().click();
    signupPage.forApplicantButton().getText()
      .then(function (value) {
        should(value).be.eql("Для соискателей");
        done();
      });
  });

  it('should open for appiciant page', function (done) {
    signupPage.forApplicantButton().click()
      .then(function () {
        signupPage.fillForm();
        return signupPage.signUpSubmitButton().click();
      })
      .then(function () {
        return signupPage.mainMenuUserName().getText();
      })
      .then(function (value) {
        should(value).be.eql("testname userlastname");
        done();
      });
  });

  it('should exit', function (done) {
    signupPage.exit()
      .then(function () {
        return signupPage.loginWithButton().getText();
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