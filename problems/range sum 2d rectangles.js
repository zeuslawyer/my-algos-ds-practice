// https://leetcode.com/problems/range-sum-query-2d-immutable/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    // edge cases
    if (!matrix || !matrix[0]) return;

    const rows = matrix.length;
    const cols = matrix[0].length;

    // construct dp matrix.
    // Each cell in this dp matrix is the bottom right corner cell of a larger rect
    // its val is the sum of all cells of that rect
    const summed = [];

    this.summed = summed;

    for (let r = 0; r < rows; r++) {
        summed[r] = Array(cols).fill(0); // init with 0s

        for (let c = 0; c < cols; c++) {
            // the formula -> current cell in matrix + top rect + left rect - overlap
            const topRect = r > 0 ? summed[r - 1][c] : 0;
            const leftRect = c > 0 ? summed[r][c - 1] : 0;
            const overlap = r > 0 && c > 0 ? summed[r - 1][c - 1] : 0;
            const current = matrix[r][c];

            // console.log(r, c, topRect, leftRect, overlap, current);
            summed[r][c] = current + topRect + leftRect - overlap;
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    console.log("SUMMED", this.summed);

    const topRect = row1 > 0 ? this.summed[row1 - 1][col2] : 0; // cell above top right corner of target rect
    const leftRect = col1 > 0 ? this.summed[row2][col1 - 1] : 0; // cell to the left of bottom left corner of target rect
    const overlap = row1 > 0 && col1 > 0 ? this.summed[row1 - 1][col1 - 1] : 0; // cell to top left of the top left corner of target rect
    const current = this.summed[row2][col2];

    console.log(topRect, leftRect, overlap, current);

    // inverse formula -> sum - toprect = leftrect + overlap
    return current - topRect - leftRect + overlap;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
];

const make = new NumMatrix(matrix);
const result = make.sumRegion(2, 1, 4, 3);

console.log("Result > ", result);
