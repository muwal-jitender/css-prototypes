var findAnagrams = function (s, p) {
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
   hashEqual(hash,pHash);
  while(right<left){
      
  }
};

const hashEqual=(hashA,hashB)=>{
  if(hashA.length!==hashB.length) return false;
  for(let [key,value] in hashA){
    if(value!==hashB.get(key)) return false;
  }
  return true;
}
