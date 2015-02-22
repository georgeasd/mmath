import Matrix from './matrix';

Matrix.prototype.transpose = function() {
  var {rows, rowLength, colLength} = this;
  var newRows = [];
  var i, j;
  for (i = 1; i <= rowLength; i++) {
    var newRow = [];
    for (j = 1; j <= colLength; j++) {
      newRow.push(this.get(j, i));
    }
    newRows.push(newRow);

  }
  return new Matrix(newRows);
};
