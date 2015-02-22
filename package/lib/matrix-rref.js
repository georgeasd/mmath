import Matrix from './matrix';

Matrix.prototype.rref = function() {
  var {rows, rowLength, colLength} = this;
  var lead = 0;
  var newRows = [];
  for (var r = 0; r < this.rows; r++) {
    if (this.columns() <= lead) {
      return;
    }
    var i = r;
    while (this.mtx[i][lead] == 0) {
      i++;
      if (this.rows() == i) {
        i = r;
        lead++;
        if (this.columns() == lead) {
          return;
        }
      }
    }

    var tmp = this.mtx[i];
    this.mtx[i] = this.mtx[r];
    this.mtx[r] = tmp;

    var val = this.mtx[r][lead];
    for (var j = 0; j < this.columns(); j++) {
      this.mtx[r][j] /= val;
    }

    for (var i = 0; i < this.rows(); i++) {
      if (i == r) continue;
      val = this.mtx[i][lead];
      for (var j = 0; j < this.columns(); j++) {
        this.mtx[i][j] -= val * this.mtx[r][j];
      }
    }
    lead++;
  }
  return this;
}
