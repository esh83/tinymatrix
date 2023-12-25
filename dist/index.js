"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    constructor(m) {
        this._rows = 0;
        this._cols = 0;
        this._matrix = [[]];
        this._matrix = m;
        this._rows = m.length;
        this._cols = m[0].length;
    }
    at(i, j) {
        if (i >= this._rows || j >= this._cols)
            throw new Error("requested range is not valid");
        return this._matrix[i][j];
    }
    add(sec) {
        if (this._rows !== sec._rows || this._cols !== sec._cols)
            throw new Error("cols and rows of two matrices should be equal to add them");
        return new Matrix(this._matrix.map((r, i) => {
            return r.map((c, j) => c + sec.at(i, j));
        }));
    }
    subtract(sec) {
        if (this._rows !== sec._rows || this._cols !== sec._cols)
            throw new Error("cols and rows of two matrices should be equal to subtract them");
        return new Matrix(this._matrix.map((r, i) => {
            return r.map((c, j) => c - sec.at(i, j));
        }));
    }
    multiply(sec) {
        if (this._cols !== sec._rows)
            throw new Error("number of columns in matrix 1 should be equal to number of rows in matrix 2 in order to multiply them");
        let i = 0;
        let j = 0;
        let k = 0;
        let result = Array(this._rows)
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
exports.Matrix = Matrix;
const arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
const m1 = new Matrix(arr);
delete arr[0];
const m2 = new Matrix([
    [2, 3, 2],
    [1, 6, 1],
    [1, 6, 1],
]);
console.log(m1.subtract(m2));
