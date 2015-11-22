var
  config = require('../config'),
  driver = require('../driver');
 
var page = {
  resumesList: elements('resumesList'),
  createResumeButton: elements('createResumeButton'),
  createResumeFormTitle: elements('createResumeFormTitle'),

  resumeBirthDaySelect: elements('resumeBirthDaySelect'),
  resumeBirthDaySelectOpt: elements('resumeBirthDaySelectOpt')
  resumeBirthMonthSelect: elements('resumeBirthMonthSelect'),
  resumeBirthMonthSelectOpt: elements('resumeBirthMonthSelectOpt')
  resumeBirthYearSelect: elements('resumeBirthYearSelect'),
  resumeBirthYearSelectOpt: elements('resumeBirthYearSelectOpt')
  resumeGenderMaleRadioButton: elements('resumeGenderMaleRadioButton'),
  resumeCity: elements('resumeCity'),
  resumePhoneCode: elements('resumePhoneCode'),
  resumePhoneNumber: elements('resumePhoneNumber'),
  resumeEducationName: elements('resumeEducationName'),
  resumeEducationOrgznization: elements('resumeEducationOrgznization'),
  resumeEducationResult: elements('resumeEducationResule'),
  resumeEducationYear: elements('resumeEducationYear'),
  resumeEducationYearOpt: elements('resumeEducationYearOpt'),
  resumeHasExperience: elements('resumeHasExperience'),
  resumeSubmitButton: elements('resumeSubmitButton'),

  resumeResultTitle: elements('resumeResultTitle'),

  fillForm: function () {
    page.resumeBirthDaySelect().click();
    page.resumeBirthDaySelectOpt().click();
    page.resumeBirthMonthSelect().click();
    page.resumeBirthMonthSelectOpt().click();
    page.resumeBirthYearSelect().click();
    page.resumeBirthYearSelectOpt().click();
    page.resumeGenderMaleRadioButton().click();
    page.resumeCity().sendKeys('Минск');
    page.resumePhoneCode().sendKeys('44');
    page.resumePhoneNumber().sendKeys('7179077');
    page.resumeEducationName().sendKeys('ГГУ им. Ф. Скорины');
    page.resumeEducationOrgznization().sendKeys('Математический');
    page.resumeEducationResult().sendKeys('ПОИТ');
    page.resumeHasExperience().click();
    page.resumeEducationYear().click();
    page.resumeEducationYearOpt().click();

    return;
  },

  exit: function () {
    return page.mainMenuUserName().setUpHover()
      .then(page.exitButton().click);
  }
};

module.exports = page;