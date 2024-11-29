const checkAnagram = (s, p) => {
  let ans = [];
  let hash = new Map();
  let pHash = new Map();
  let window = p.length - 1;
  let length = s.length - 1;
  if (length < window) return ans;
  let left = 0;
  let right = 0;

  while (right < window) {
    hash.set(s[right],++1);
    pHash.set(p[right],++1);
    right++;
}
console.log(hashEqual(hash,pHash));
while(right<length){
    
}
};
