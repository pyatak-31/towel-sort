
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let res = [];
    matrix.forEach((el,i) => {
      if(i % 2 == 0) {
        res.push(...el)
      } else {
        res.push(...el.reverse())
      }
    })
  return res;
}
