'use strict';

const asMomentDate = require('./src/asMomentDate')
  , outputMomentDateInFormat = require('./src/outputMomentDateInFormat')
  ;

module.exports = function dateUtilities (dateToParse) {
  let mDate = asMomentDate(dateToParse)
    ;
  
  if (!mDate.isValid()) {
    throw new Error(`${dateToParse} isnt a valid date`);
  }
  
  return {
    dateProvided: dateToParse
    , momentDate: mDate
    , ticks: mDate.valueOf()
  }
}
