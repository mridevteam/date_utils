'use strict';

const asMomentDate = require('./src/asMomentDate')
  , outputMomentDateInFormat = require('./src/outputMomentDateInFormat')
  , outputInFormat = (mDate) => (format) => outputMomentDateInFormat(mDate, format)
  , addDuration = require('./src/addDuration')
  ;

module.exports = function dateUtilities (dateToParse) {
  let mDate = asMomentDate(dateToParse)
    ;
  
  if (!mDate.isValid()) {
    throw new Error(`${dateToParse} isnt a valid date`);
  }
  
  let output = outputInFormat(mDate);
  
  return {
    dateProvided: dateToParse
    , momentDate: mDate
    , ticks: mDate.valueOf()
    , standardDateFormat: output('YYYY-MM-DD HH:mm:ss')
    , dateForDisplay: output('MM-DD-YYYY')
    , dateForDisplayFull: output('MMM DD, YYYY')
    , format: output
    , toDbFormat: new Date(mDate.year(), mDate.month(), mDate.date())
    , addDuration: (duration = '0d', outputFormat = 'YYYY-MM-DD') => {
      if (duration === '0d') {
        console.log(`duration read as ${duration}; probably didnt pass a duration`);
      }
      return addDuration(mDate, duration, outputFormat);
    }
  }
}
