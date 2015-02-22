import Matrix from './matrix';

Matrix.prototype.add = function(matrix) {
  var {rows, rowLength, colLength} = this;
  if (matrix.rowLength !== rowLength || matrix.colLength !== colLength) {
    throw new Error('matricies must have same dimensions');
  }
  var newRows = [];
  for (var i = 1; i <= rowLength; i++) {
    var newRow = [];
    for (var j = 1; j <= colLength; j++) {
      newRow.push(this.get(i, j) + matrix.get(i, j));
    }
    newRows.push(newRow);
  }
  return new Matrix(newRows);
};
