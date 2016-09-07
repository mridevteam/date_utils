# validity_checks
Tests the input for correct and reasonable conditions, such as isObject, isFunction etc...

### This can be used on the server (nodejs) or the client
The client version of this file can be found at [`/dist/validityChecks.js`](dist/validityChecks.js)
To use this version `window.__validityChecks`

# Nodejs Examples
```
const checks = require('validity_checks')
// Check function
checks.isFunction('nope'); -> false

// Check Object
checks.isObject('nope');   -> false

// Check String
checks.isString('nope');   -> true

// Check Date
checks.isDate('nope');     -> false

// Required Param
const reqParam = checks.requiredParameter;
function makePie(crustType = reqParam('crustType') {
 // do stuff
}

makePie() -> throws error 'crustType is not passed'

// Check for empty object
checks.isEmptyObject({}) -> true
```

#Client Examples
```
<script type="text/javascript" async src="/dist/validityChecks.js"></script>
// Places __validityChecks on the global window object

// Check function
window.__validityChecks.isFunction('nope'); -> false

// Check Object
window.__validityChecks.isObject('nope');   -> false

// Check String
window.__validityChecks.isString('nope');   -> true

// Check Date
window.__validityChecks.isDate('nope');     -> false

// Required Param ES6 browser required!
const reqParam = window.__validityChecks.requiredParameter;
function makePie(crustType = reqParam('crustType') {
 // do stuff
}

makePie() -> throws error 'crustType is not passed'

// Check for empty object
window.__validityChecks.isEmptyObject({}) -> true
```
