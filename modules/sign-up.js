var
	elements = require('../elements'),
	driver = require('../driver');
 
var page = {
	signUpButton: elements('signUpButton'),
	forApplicantButton: elements('forApplicantButton'),
	signUpSubmitButton: elements('signUpSubmitButton'),
	exitButton: elements('exitButton'),
	loginWithButton: elements('loginWithButton'),

	firstnameField: elements('firstnameField'),
	lastnameField: elements('lastnameField'),
	emailFiled: elements('emailFiled'),
	passwordField: elements('passwordField'),

	mainMenuUserName: elements('mainMenuUserName'),

	fillForm: function () {
		page.firstnameField().sendKeys('testname');
		page.lastnameField().sendKeys('userlastname');
		page.emailFiled().sendKeys('user11111@test.com');
		page.passwordField().sendKeys('123123123');

		return;
	},

	exit: function () {
		return page.mainMenuUserName().setUpHover()
			.then(page.exitButton().click);
	}
};

module.exports = page;