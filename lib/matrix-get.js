import Matrix from './matrix';

Matrix.prototype.get = function(i, j) {
  return this.rows[i - 1][j - 1];
};
