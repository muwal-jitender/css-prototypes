// const findAnagrams = function (s, p) {
//   let ans = [];
//   let hash = new Map();
//   let pHash = new Map();
//   let window = p.length;
//   let len = s.length;
//   if (len < window) return ans;
//   let left = 0;
//   let right = 0;

//   while (right < window) {
//     hash.has(s[right])
//       ? hash.set(s[right], hash.get(s[right]) + 1)
//       : hash.set(s[right], 1);
//     pHash.has(p[right])
//       ? pHash.set(p[right], pHash.get(p[right]) + 1)
//       : pHash.set(p[right], 1);
//     right++;
//   }
//   while (right <= len) {
//     const equal = hashEqual(pHash, hash);
//     if (equal) ans.push(left);

//     hash.set(s[left], hash.get(s[left]) - 1);
//     left++;

//     hash.has(s[right])
//       ? hash.set(s[right], hash.get(s[right]) + 1)
//       : hash.set(s[right], 1);
//     right++;
//   }
//   return ans;
// };

// const hashEqual = (hashP, hashS) => {
//   for (let [key, value] of hashP) {
//     if (value !== hashS.get(key)) return false;
//   }
//   return true;
// };
// // abab ab
// // cbaebabacd abc
// // abcdecdbacd cab
// // baa aa
// let s = "abab";
// let p = "ab";
// const result = findAnagrams(s, p);
// console.log(result);

// Longest Repeating Character Replacement
let characterReplacement = function (s, k) {
  let count = {};
  let result = 0;
  l = 0;
  for (let r = 0; r < s.length; r++) {
    count[s[r]] = 1 + (count[s[r]] || 0);

    while (r - l + 1 - Math.max(...Object.values(count)) > k) {
      count[s[l]] -= 1;
      l += 1;
    }
    result = Math.max(result, r - l + 1);
  }
  return result;
};

let s = "ABABBA";
let k = 2;
// let ans = characterReplacement(s, k);
// console.log(ans);

var sortedSquares = function (nums) {
  let ans = new Array(nums.length);
  let l = 0;
  let r = nums.length - 1;
  let index = nums.length - 1;
  while (l <= r) {
    lSqrt = Math.pow(nums[l], 2);
    rSqrt = Math.pow(nums[r], 2);

    if (lSqrt > rSqrt) {
      ans[index] = lSqrt;
      l++;
      index--;
    } else {
      ans[index] = rSqrt;
      r--;
      index--;
    }
  }
  return ans;
};
let nums = [-4, -1, 0, 3, 10];
// let ans = sortedSquares(nums);
// console.log(ans);

var findSubstring = function (s, words) {
  let window = words[0].length;
  let hash = {};
  let wordsHash = {};
  let l = 0;
  let r = 0;
  let ans = [];
  while (r < words.length) {
    if (wordsHash[words[r]]) wordsHash[words[r]]++;
    else wordsHash[words[r]] = 1;

    let word = s.substr(r * window, window);
    if (hash[word]) hash[word]++;
    else hash[word] = 1;
    r++;
  }

  while (r <= s.length) {
    if (hasEqual(wordsHash, hash)) ans.push[l];
    //hash[s[l]--;
  }
};

let hasEqual = function (hash1, hash2) {
  for (const [key, value] of Object.entries(hash1)) {
    if (value !== hash2[key]) return false;
  }
  return true;
};

s = "barfoothefoobarman";
let words = ["foo", "bar"];
console.log(findSubstring(s, words));
