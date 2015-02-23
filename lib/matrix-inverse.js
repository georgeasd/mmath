import Matrix from './matrix';

Matrix.prototype.inverse = function(i, j) {
  var {rowLength, colLength} = this;

  if (colLength === 0 || colLength !== rowLength) {
    throw new Error('inverse can only be calculated for nonzero square matricies');
  }

  return this.adjugate().scalar(1 / this.determinant());
};
