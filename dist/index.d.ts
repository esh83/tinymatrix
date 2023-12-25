export declare class Matrix {
    private _rows;
    private _cols;
    private _matrix;
    constructor(m: number[][]);
    at(i: number, j: number): number;
    add(sec: Matrix): Matrix;
    subtract(sec: Matrix): Matrix;
    multiply(sec: Matrix): Matrix;
}
