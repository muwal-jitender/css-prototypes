const luckyNumber = (arr: number[]): number => {
  debugger;
  const map = new Map<number, number>();
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const key = map.keys[element] as number;
    if (key) {
      map.set(element, (map.get(element) as number) + 1);
    } else {
      map.set(element, 1);
    }
  }
  const luckyNumbers: number[] = [];
  for (const [k, v] of map.entries()) {
    if (k === v) {
      luckyNumbers.push(v);
    }
  }
  return luckyNumbers.length > 0 ? Math.max(...luckyNumbers) : -1;
};

const result = luckyNumber([1, 2, 2, 3, 4]);
console.log(result);
