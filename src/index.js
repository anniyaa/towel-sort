
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {return []};
  if (Array.isArray(matrix)) {
      if (matrix.length === 0) {return []};
  }
  let result = [];
  let check = true;
  for (arr of matrix) {
      if (check) {
          result.push(...arr);
      } else {
          result.push(...arr.reverse());
      }
      check = !check;
  }
  return result;
}
