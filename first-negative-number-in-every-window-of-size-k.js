const firstNegativeNumber = (arr, k) => {
  if (arr.length === 0 || arr.length < k) return null;
  let outArr = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let foundNegative = false;
    for (let j = 0; j < k; j++) {
      if (Math.sign(arr[j + i]) === -1) {
        outArr.push(arr[j + i]);
        foundNegative = true;
        break;
      }
    }
    if (!foundNegative) {
      outArr.push(0);
    }
  }
  return outArr;
};

const output = firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3);
console.log(output);
