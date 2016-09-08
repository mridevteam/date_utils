# date_utils
Consists of date utility functions.

[![Build Status](https://travis-ci.org/mridevteam/date_utils.svg?branch=master)](https://travis-ci.org/mridevteam/date_utils)
[![Coverage Status](https://coveralls.io/repos/github/mridevteam/date_utils/badge.svg?branch=master)](https://coveralls.io/github/mridevteam/date_utils?branch=master)
[![Dependency Status](https://david-dm.org/mridevteam/date_utils.svg)](https://david-dm.org/mridevteam/date_utils)

### Continuous Integration
Currently using [travis-ci.org](https://travis-ci.org/mridevteam) for continuous integration.

### Code Coverage
Currently using [coveralls.io](https://coveralls.io/repos/github/mridevteam) to provide code coverage badge.

### This can be used on the server (nodejs) or the client
The client version of this file can be found at [`/dist/dateUtils.js`](dist/dateUtils.js)
To use this version `window.__dateUtils`

# Nodejs Examples
```
const dateUtils = require('date_utils')

let d = dateUtils('2012-12-01')
d.dateProvided       -> '2012-12-01'
d.momentDate         -> Moment-ized date object for you to do with what you want
d.ticks              -> valueOf() in Moment
d.standardDateFormat -> '2012-12-01 00:00:00'
d.dateForDisplay     -> '12-01-2012'
d.dateForDisplayFull -> 'December 01, 2012'
d.toDbFormat         -> '2012-12-01T06:00:00.000Z' instance of Date

// AddDuration
// Acceptable formats +1d, +1m, +1w, +1y ....
d.addDuration() // Defaults to +0d and outputFormat of YYYY-MM-DD
d.addDuration('+1d') -> '2012-12-02'
d.addDuration('+1d', 'DD/MM/YYYY') -> '02/12/2012'
```

#Client Examples
```
<script type="text/javascript" async src="/dist/dateUtils.js"></script>

var dateUtils = window.__dateUtils;

var d = dateUtils('2012-12-01')
d.dateProvided       -> '2012-12-01'
d.momentDate         -> Moment-ized date object for you to do with what you want
d.ticks              -> valueOf() in Moment
d.standardDateFormat -> '2012-12-01 00:00:00'
d.dateForDisplay     -> '12-01-2012'
d.dateForDisplayFull -> 'December 01, 2012'
d.toDbFormat         -> '2012-12-01T06:00:00.000Z' instance of Date

// AddDuration
// Acceptable formats +1d, +1m, +1w, +1y ....
d.addDuration() // Defaults to +0d and outputFormat of YYYY-MM-DD
d.addDuration('+1d') -> '2012-12-02'
d.addDuration('+1d', 'DD/MM/YYYY') -> '02/12/2012'
```
