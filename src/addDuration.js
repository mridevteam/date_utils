'use strict';

module.exports = (mDate, duration, outputFormat = 'YYYY-MM-DD') => {
  let _duration = duration.slice(0, duration.length - 1)
    , unitOfTime = duration.charAt(duration.length - 1)
    ;
  
  // transforming 'm' to 'M' because we mean months not minutes
  unitOfTime = unitOfTime === 'm'
                ? unitOfTime.toUpperCase()
                : unitOfTime;
  
  return mDate.clone().add(_duration, unitOfTime).format(outputFormat);
};
