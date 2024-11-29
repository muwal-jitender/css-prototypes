const slidingWindowBrute = (arr, k) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let out = [];
  for (let i = 0; i + k <= arr.length; i++) {
    let totalSub = 0;
    for (let j = 0; j < k; j++) {
      totalSub += arr[j + i];
    }
    out.push(totalSub);
  }

  return Math.max(...out);
};

const slidingWindow = (arr, k) => {
  if (arr.length === 0 || k > arr.length) return null;

  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    const element = arr[i];
    currentSum = currentSum + element;
  }
  maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
const slidingWindow2 = (arr, k) => {
  if (k > arr.length) return null;
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];

  let i = 0;
  let j = 0;
  let sum = 0;
  for (let index = 0; index < k; index++) {
    const element = arr[j];
    sum = sum + element;
    j++;
  }
  let max = sum;
  j--;
  while (j < arr.length - 1) {
    sum = sum - arr[i];
    i++;
    j++;
    sum = sum + arr[j];
    if (sum > max) max = sum;
  }
  return max;
};

console.log("Test Case 1");
//console.log(slidingWindow([1, 3, 2, 6, -1, 4, 1, 8, 2], 4));
console.log(slidingWindow([], 3));
console.log("Test Case 2");
console.log(slidingWindow([-10, -20, -30, -5, -15], 2));
console.log("Test Case 3");
//console.log(slidingWindow([10, -2, -10, 4, 7, 2, 5, -3, 6], 5));
console.log(slidingWindow([-7, -3, -12, -9, -2, -8, -5], 4));
console.log("Test Case 4");
//console.log(slidingWindow([0, 0, 5, -5, 10, 20, -10, 3, 7], 3));
console.log(slidingWindow([-6, 0, -2, -9, -4, -1, -7], 3));

const slidingWindow1 = (arr, k) => {
  if (arr.length === 0) return "Invalid input: array is empty";
  if (arr.length === 1) return arr[0];
  let max = 0;
  let i = 0;
  let j = 0;
  while (j < arr.length - 1) {
    let sum = 0;
    for (let index = 0; index < k; index++) {
      const element = arr[j];
      sum = sum + element;
      j++;
    }
    if (sum > max) max = sum;
    i++;
    if (j < arr.length - 1) j = i;
  }
};
