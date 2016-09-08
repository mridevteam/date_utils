'use strict';

const validityChecks = require('validity_checks')
  , reqParam = validityChecks.requiredParameter
  , isDate = validityChecks.isDate
  ;

/**
 * Determines if a date has expired (is in the past from now)
 *
 * @param {Date} date
 * @returns {boolean}
 */
const hasDateExpired = (date = reqParam('date')) => {
  const now = new Date();

  if (!isDate(date)) { throw new Error('Param "date" isnt a Date instance'); }

  return date < now;
};

module.exports = hasDateExpired;
