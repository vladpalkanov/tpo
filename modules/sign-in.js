var
  elements = require('../elements'),
  driver = require('../driver');
 
var page = {
  usernameInput: elements('usernameInput'),
  passwordInput: elements('passwordInput'),
  signinButton: elements('signinButton'),

  mainMenuUserName: elements('mainMenuUserName'),

  fillForm: function () {
    page.usernameInput().clear();
    page.passwordInput().clear();
    page.usernameInput().sendKeys('user11111@test.com');
    page.passwordInput().sendKeys('123123123');

    return;
  },

  exit: function () {
    return page.mainMenuUserName().setUpHover()
      .then(page.exitButton().click);
  }
};

module.exports = page;