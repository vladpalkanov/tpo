var
	config = require('./config'),
	driver = require('./driver');

module.exports = function (elementSelector) {
	return function () { 
		return driver.findElement({ css: config[elementSelector] });
	}
};