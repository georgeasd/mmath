import Matrix from './matrix';

Matrix.prototype.scalar = function(scalar) {
  var {rows, rowLength, colLength} = this;
  var newRows = [];
  for (var i = 1; i <= rowLength; i++) {
    var newRow = [];
    for (var j = 1; j <= colLength; j++) {
      newRow.push(this.get(i, j)  * scalar);
    }
    newRows.push(newRow);
  }
  return new Matrix(newRows);
};
