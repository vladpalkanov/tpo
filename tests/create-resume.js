var
  driver = require('../driver'),
  config = require('../config'),
  createResume = require('../modules/create-resume.js'),
  should = require('should');

describe('Creation of resume works correct: ', function () {

  // Open site before
  before(function (done) {
    this.timeout(15000);
    driver
      .get(config.siteURL)
      .then(done);

  });

  it('should open create form', function(done) {
    createResume.resumesList().setOnHover();
    createResume.createResumeButton().click()
      .then(function () {
        return createResumeFormTitle.getText();
      })
      .then(function (value) {
        should(value).be.eql('Создать резюме');
        done();
      });
  });

  it('should create resume', function (done) {
    createResume.fillForm();
    createResume.resumeSubmitButton().click()
      .then(function() {
        return resumeResultTitle.getText();
      })
      .then(function (value) {
        should(value).be.eql('Резюме успешно опубликовано');
      })
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