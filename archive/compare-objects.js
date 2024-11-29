var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[right]);
    result = Math.max(result, right - left + 1);
  }
  return result;
};

//s = "rarker";
//s = "dvdf";
// "rarker"
// "ohvhjdml"
// "dvdf"
// const result = lengthOfLongestSubstring(s);
// console.log(`Result: ${result}`);

var findAnagrams = function (s, p) {
  let count = 0;
  let startIndex = null;
  let map = new Map();
  let result = [];
  if (p.length > s.length) return [];
  function reset() {
    startIndex = null;
    count = 0;
    map.clear();
  }
  for (let i = 0; i < s.length; i++) {
    if (p.includes(s[i])) {
      if (map.has(s[i])) {
        reset();
      }
      map.set(s[i], i);
      count++;
      const [first] = map.values();
      if (startIndex === null) startIndex = first;
    } else {
      reset();
    }

    if (count === p.length && startIndex !== null) {
      result.push(startIndex);
      map.delete(s[startIndex]);
      startIndex = null;
      count--;
    }
  }
  return result;
};
// abab ab
// cbaebabacd abc
// abcdecdbacd
let s = "abcdecdbccb";
let p = "cab";
const result = findAnagrams(s, p);
console.log(`Result: ${result}`);
