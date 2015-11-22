var
  driver = require('../driver'),
  config = require('../config'),
  searchPage = require('../modules/search.js'),
  should = require('should');

describe('Search works correct: ', function () {

  // Open site before
  before(function (done) {
    this.timeout(15000);
    driver
      .get(config.siteURL)
      .then(done);
  });

  it('should search several vacancies', function(done) {
    searchPage.searchQueryInput().sendKeys('JavaScript');
    searchPage.searchButton().click()
      .then(function() {
        return searchPage.searchFoundTitle().getText();
      })
      .then(function (value) {
        value = value.replace('Найдено ', '')
        value = value.replace(' вакансий', '');

        should(value).not.be.equal('');
        done();
      })
  });

  it('should search several none', function(done) {
    searchPage.searchQueryInput().sendKeys('qweqweqweqweqweqweqw');
    searchPage.searchButton().click()
      .then(function() {
        return searchPage.searchNoResultTitle().getText();
      })
      .then(function (value) {
        should(value).be.equal('Не найдено ни одной вакансии — измените параметры поиска, ключевые слова или период.');
        done();
      })
  });

  after(function(done) {
    driver.quit().then(done);
  });
});