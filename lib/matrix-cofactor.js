import Matrix from './matrix';

Matrix.prototype.cofactor = function(i, j) {
  var {rows, rowLength, colLength} = this;
  var newRows = [];
  for (var _i = 1; _i <= rowLength; _i++) {
    if (_i !== i) {
      var newCols = [];
      for (var _j = 1; _j <= colLength; _j++) {
        if (_j !== j) {
          newCols.push(this.get(_i, _j));
        }
      }

    newRows.push(newCols);
    }
  }
  return new Matrix(newRows);
};
