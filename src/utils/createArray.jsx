export const createArray = (first, last) => {
  let arr = [];
  arr.length = 4;
  const starArr = arr.fill(first);
  let newArr = starArr;
  newArr.push(last);
  return newArr;
};
