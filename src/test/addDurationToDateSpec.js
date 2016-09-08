'use strict';

const chai      = require('chai')
  , expect      = chai.expect
  , moment      = require('moment')
  , addDuration = require('../addDuration')
  ;

describe('addDurationToDateSpec', function() {
  describe(`should add durations correctly`, function() {
    const INPUT = '2016-07-01T00:00:00.000Z';

    let durations = [{
        in: '+1h',
        out: '2016-07-01'
      }, {
        in: '+2d',
        out: '2016-07-03'
      }, {
        in: '+3w',
        out: '2016-07-22'
      }, {
        in: '+4m',
        out: '2016-11-01'
      }, {
        in: '+5y',
        out: '2021-07-01'
      }
    ];

    durations.forEach(d => {
      it(`should add ${d.in} correctly.`, function() {
        let dDate = addDuration(moment.utc(new Date(INPUT)), d.in, 'YYYY-MM-DD');

        expect(typeof dDate).to.equal('string');

        expect(dDate).to.equal(d.out);
      });
    });
  });

  describe(`should subtract durations correctly`, function() {
    const INPUT = '2016-07-01T00:00:00.000Z';

    let durations = [{
      in: '-1h',
      out: '2016-06-30'
    }, {
      in: '-2d',
      out: '2016-06-29'
    }, {
      in: '-3w',
      out: '2016-06-10'
    }, {
      in: '-1m',
      out: '2016-06-01'
    }, {
      in: '-5y',
      out: '2011-07-01'
    }
    ];

    durations.forEach(d => {
      it(`should subtract ${d.in} correctly.`, function() {
        let dDate = addDuration(moment.utc(new Date(INPUT)), d.in, 'YYYY-MM-DD');

        expect(typeof dDate).to.equal('string');

        expect(dDate).to.equal(d.out);
      });
    });
  });

  describe(`should allow you to format the result`, function() {
    it('should default to YYYY-MM-DD format', function() {
      const DATE_INPUT = `2012-01-01`
        , DURATION_INPUT = `+1d`
        , mTestDate = moment.utc(new Date(DATE_INPUT))
        ;

      let durationResult = addDuration(mTestDate, DURATION_INPUT);

      expect(durationResult).to.equal('2012-01-02');
    });

    it('should accept and format what i pass', function() {
      const DATE_INPUT = `2012-01-01`
        , DURATION_INPUT = `+1d`
        , mTestDate = moment.utc(new Date(DATE_INPUT))
        ;

      let durationResult = addDuration(mTestDate, DURATION_INPUT, 'MM/DD/YYYY');

      expect(durationResult).to.equal('01/02/2012');
    });
  });
});
