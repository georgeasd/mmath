import Matrix from './matrix';

Matrix.prototype.determinant = function() {
  if (this.colLength === 0 || this.colLength !== this.rowLength) {
    throw new Error('determinant can only be calculated for nonzero square matricies');
  }
  if (this.rowLength === 2) {
    return this.get(1, 1) * this.get(2, 2) - this.get(1, 2) * this.get(2, 1);
  } else {
    return this.rows[0].reduce((lastValue, mutlipler, i) => {
      var sign = (i % 2 === 0 ? 1 : -1);
      var cofactor = this.cofactor(1, i + 1);
      var cofactorDeterminant = cofactor.determinant();
      return lastValue + mutlipler * cofactorDeterminant * sign;
    }, 0);
  }
};
