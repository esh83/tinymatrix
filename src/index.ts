export default class Matrix {
  private _rows: number = 0;
  private _cols: number = 0;
  private _matrix: number[][] = [[]];

  constructor(m: number[][]) {
    this._matrix = m.map((arr) => arr.slice());
    this._rows = m.length;
    this._cols = m[0].length;
  }
  public at(i: number, j: number): number {
    if (i >= this._rows || j >= this._cols)
      throw new Error("requested range is not valid");

    return this._matrix[i][j];
  }
  public add(sec: Matrix): Matrix {
    if (this._rows !== sec._rows || this._cols !== sec._cols)
      throw new Error(
        "cols and rows of two matrices should be equal to add them"
      );
    return new Matrix(
      this._matrix.map((r, i) => {
        return r.map((c, j) => c + sec.at(i, j));
      })
    );
  }
  public subtract(sec: Matrix): Matrix {
    if (this._rows !== sec._rows || this._cols !== sec._cols)
      throw new Error(
        "cols and rows of two matrices should be equal to subtract them"
      );
    return new Matrix(
      this._matrix.map((r, i) => {
        return r.map((c, j) => c - sec.at(i, j));
      })
    );
  }
  public multiply(sec: Matrix): Matrix {
    if (this._cols !== sec._rows)
      throw new Error(
        "number of columns in matrix 1 should be equal to number of rows in matrix 2 in order to multiply them"
      );
    let i = 0;
    let j = 0;
    let k = 0;
    let result: number[][] = Array(this._rows)
      .fill(0)
      .map(() => new Array(sec._cols).fill(0));
    console.log(result);

    for (i = 0; i < this._rows; i++) {
      for (j = 0; j < sec._cols; j++) {
        result[i][j] = 0;
        for (k = 0; k < sec._rows; k++) {
          result[i][j] += this._matrix[i][k] * sec._matrix[k][j];
        }
      }
    }
    return new Matrix(result);
  }
}
