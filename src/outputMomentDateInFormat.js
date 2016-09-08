'use strict';

const validityChecks = require('validity_checks')
  , moment = require('moment')
  , rp = validityChecks.requiredParameter
  ;

module.exports = (dateToFormat = rp('dateToFormat(moment)'), desiredFormat = rp('desiredFormat')) => {
  if (!(dateToFormat instanceof moment)) {
    throw new Error('First param must be a momentized date object');
  }
  
  return dateToFormat.format(desiredFormat);
};
