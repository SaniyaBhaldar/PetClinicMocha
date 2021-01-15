const log4js = require('log4js');
log4js.configure('./logFile/log4js.json');

exports.default = log4js.getLogger('default');