import Matrix from './matrix';

Matrix.prototype.transpose = function() {
  var {rows, rowLength, colLength} = this;
  var newRows = Array(colLength);
  for (var i = 0; i < colLength; i++) {
    newRows[i] = [];
  }
  rows.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      newRows[colIndex][rowIndex] = col;
    });
  });
  return new Matrix(newRows);
};
