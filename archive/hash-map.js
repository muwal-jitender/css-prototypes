let hash = new Map();
hash.set("apple", 0.67);
hash.set("milk", 2.5);
hash.set("avocado", 55);
if (!hash.get('avocado')) {
    hash.set("avocado", 146);
}

//console.log(hash.get('abc'))


hash.forEach((i, j) => {
    console.log(`The value of ${j} is ${i}`);
})
//console.log(hash.get('apple'));

