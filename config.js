module.exports = {
	siteURL: 'http://www.jobs.tut.by',

	// COMMON
	exitButton: 'button[data-qa="mainmenu_logoffUser"]',
	signUpButton: 'input[data-qa="login-register"]',
	loginWithButton: 'input[data-qa="login-login"]',
	signinButton: 'input[data-qa="login-submit"]',
	
	mainMenuUserName: 'div[data-qa="mainmenu_userName"]',

	// SIGN UP
	forApplicantButton: 'a[data-qa="login-register-applicant"]',
	signUpSubmitButton: 'input[data-qa="account-signup-submit"]',

	firstnameField: 'input[data-qa="account-signup-firstname"]',
	lastnameField: 'input[data-qa="account-signup-lastname"]',
	emailFiled: 'input[data-qa="account-signup-email"]',
	passwordField: 'input[data-qa="account-signup-password"]',

	// SIGN IN
	usernameInput: 'input[data-qa="login-input-username"]',
	passwordInput: 'input[data-qa="login-input-password"]',

	// CREATE RESUME
	resumesList: 'div[data-qa="mainmenu_resumes"]',
	createResumeButton: 'a[data-q="mainmenu_createResume"]',
	createResumeFormTitle: '.HH-MainContent h1.title',
	
	resumeBirthDaySelect: 'select[data-qa="resume__birthday__day-select"]',
	resumeBirthDaySelectOpt: 'select[data-qa="resume__birthday__day-select"]>option[value="02"]',
	resumeBirthMonthSelect: 'select[data-qa="resume__birthday__month-select"]',
	resumeBirthMonthSelectOpt: 'select[data-qa="resume__birthday__month-select"]>option[value="02"]',
	resumeBirthYearSelect: 'select[data-qa="resume__birthday__year-select"]',
	resumeBirthYearSelectOpt: 'select[data-qa="resume__birthday__year-select"]>option[value="1992"]',
	resumeGenderMaleRadioButton: 'input.HH-Resume-Gender-Value',
	resumeCity: 'input[data-qa="suggestCity"]',
	resumePhoneCode: 'input.HH-Resume-Phones-Phone-City',
	resumePhoneNumber: 'input.HH-Resume-Phones-Phone-Number',
	resumeEducationName: 'input.HH-Resume-Education-Name',
	resumeEducationOrgznization: 'input.HH-Resume-Education-Organization',
	resumeEducationResult: 'input.HH-Resume-Education-Result',
	resumeEducationYear: 'input.HH-Resume-Education-Year',
	resumeEducationYearOpt: 'input.HH-Resume-Education-Year>option[value="2015"]',
	resumeHasExperience: 'input#resumebuilder-has-experience',
	resumeSubmitButton: 'input.HH-Resume-Form-Submit',

	resumeResultTitle: 'h2.suitablevacancies__published-head',

	// SEARCH
	searchQueryInput: 'input[data-qa="vacancy-serp__query"]',
	searchButton: 'button[data-qa="navi-search__button"]',
	searchFoundTitle: 'div[data-qa="vacancy-serp__found"]',
	searchNoResultTitle: 'div[data-qa="vacancy-serp__no-result"]'
};