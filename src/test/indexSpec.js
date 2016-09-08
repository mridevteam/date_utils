'use strict';

const chai     = require('chai')
  , moment     = require('moment')
  , expect     = chai.expect
  , entryPoint = require('../../index')
  ;

describe('indexSpec', function () {
  describe('Error conditions', function() {
    it('should error if passed invalid date', function () {
      expect(function() {
          entryPoint('some-date-that-isnt')
      }).to.throw();
    });
  });
  
  describe('Nominal operation', function () {
    it('should return an object', function() {
      const TEST_DATE = '2012-01-01'
        , dates = entryPoint(TEST_DATE)
        ;
      
      expect(typeof dates).to.equal('object');
      
      expect(dates.dateProvided).to.equal(TEST_DATE);
      expect(dates.momentDate instanceof moment).to.equal(true);
      expect(dates.ticks).to.not.equal(undefined);
    });
  });
});
