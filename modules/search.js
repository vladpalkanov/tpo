var
	elements = require('../elements'),
	driver = require('../driver');
 
var page = {
	searchQueryInput: elements('searchQueryInput'),
	searchButton: elements('searchButton'),
	searchFoundTitle: elements('searchFoundTitle'),
	searchNoResultTitle: elements('searchNoResultTitle')
};

module.exports = page;