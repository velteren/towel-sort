
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  if (Array.isArray(matrix) == false) return arr;
  for (let i=0; i < matrix.length; i++) {
    if (i == 0) arr = arr.concat(matrix[i]);
    if (i == 1) arr = arr.concat(matrix[i].reverse())
    if (i>1 & i%2 == 0) arr = arr.concat(matrix[i]);
    if (i>1 & i%2 !== 0) arr = arr.concat(matrix[i].reverse());
  }
  return arr;
}
