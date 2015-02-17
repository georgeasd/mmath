class Matrix {
  constructor(rows) {
    if (!(this instanceof Matrix)) {
      return new Matrix(rows);
    }
    this.rows = rows;
    this.rowLength = rows.length;
    this.colLength = (rows[0] && rows[0].length) || 0;
    this.validate();
  }

  validate() {
    var {rows, colLength} = this;
    rows.forEach(row => {
      if (row.length !== colLength) {
        throw new Error("row lengths don't match");
      }
    });
  }
}

export default Matrix;
