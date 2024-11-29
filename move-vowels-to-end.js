// output leetcode, hello
function moveVowelsToEnd(s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  const vowels = "aeiouAEIOU";

  while (left < right) {
    if (vowels.includes(arr[left])) {
      const vowel = arr.splice(left, 1)[0];
      arr.push(vowel);
      right--;
    } else {
      left++;
    }
  }
  return arr.join("");
}
console.log(moveVowelsToEnd("leetcode")); // Output: "ltcdEeoe"
console.log(moveVowelsToEnd("hello")); // Output: "hllEoe"
