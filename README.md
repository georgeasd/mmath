mmath
===

[![Build Status](https://travis-ci.org/kolodny/mmath.svg?branch=master)](https://travis-ci.org/kolodny/mmath)

a tiny linear algebra library


usage

```js
var mmath = require('mmath');

var matrix = new mmath.Matrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]);
```

API:

`Matrix#add(sameDimsMatrix)`

`Matrix#determinant()`

`Matrix#get(i, j)`

`Matrix#multiply(otherMatrix)`

`Matrix#scalar(number)`

`Matrix#tranpose()`

`Matrix#inverse()`

`Matrix#adjugate()`

`Matrix#cofactor(i, j)`
