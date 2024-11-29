// Input abcabcbb
function longestSubString(s) {
  let set = new Set();
  let left = 0;
  maxLen = 0;
  for (right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[right]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log(longestSubString("abcabcbb")); // Output: 3 (substring "abc")
