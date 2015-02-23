import Matrix from './matrix';

Matrix.prototype.adjugate = function() {
  var {rows, rowLength, colLength} = this;
  var i;
  var j;
  var newRows;

  if (colLength === 0 || colLength !== rowLength) {
    throw new Error('adjugate can only be calculated for nonzero square matricies');
  }

if (colLength === 1) {
    newRows = [[1 / this.get(1, 1)]];
  } else if (colLength === 2) {
    newRows = [
      [this.get(2, 2), -this.get(1,2)],
      [-this.get(2,1), this.get(1, 1)]
    ];
  } else {
    newRows = [];
    for (i = 1; i <= rowLength; i++) {
      var newRow = [];
      for (var j = 1; j <= colLength; j++) {
        var sign = (i + j) % 2 === 0 ? 1 : -1;
        newRow.push( sign * this.cofactor(i, j).determinant() );
      }
      newRows.push(newRow);
    }
  }

  return new Matrix(newRows).transpose();
};
