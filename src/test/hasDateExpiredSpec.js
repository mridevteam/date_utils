'use strict';

const chai         = require('chai')
  , expect         = chai.expect
  , hasDateExpired = require('../hasDateExpired')
  ;

describe('hasDateExpiredSpec', function() {
  describe('Nominal operation', function() {
    it('should return true', function() {
      let pastDate = new Date(2011, 0, 1);
      expect(hasDateExpired(pastDate)).to.equal(true);
    });

    it('should return false', function() {
      let futureDate = new Date(2018, 0, 1);
      expect(hasDateExpired(futureDate)).to.equal(false);
    });
  });

  describe('Error condition', function() {
    it('should error if no date passed to check', function() {
      expect(function() {
        hasDateExpired();
      }).to.throw();
    });
  });
});
