import Matrix from './matrix';

function determinantSubMatrix(matrix, notI, notJ) {
  var {rows, rowLength, colLength} = matrix;
  var newRows = [];
  for (var i = 1; i <= rowLength; i++) {
    if (i !== notI) {
      var newCols = [];
      for (var j = 1; j <= colLength; j++) {
        if (j !== notJ) {
          newCols.push(matrix.get(i, j));
        }
      }

    newRows.push(newCols);
    }
  }
  return new Matrix(newRows);
}

Matrix.prototype.determinant = function() {
  if (this.colLength === 0 || this.colLength !== this.rowLength) {
    throw new Error('determinant can only be calculated for nonzero square matricies');
  }
  if (this.rowLength === 2) {
    return this.get(1, 1) * this.get(2, 2) - this.get(1, 2) * this.get(2, 1);
  } else {
    return this.rows[0].reduce((lastValue, mutlipler, i) => {
      var sign = (i % 2 === 0 ? 1 : -1);
      return lastValue + mutlipler * determinantSubMatrix(this, 1, i + 1).determinant() * sign;
    }, 0);
  }
};
