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

var determinant = matrix.determinant();
var transposed = matrix.transpose();
