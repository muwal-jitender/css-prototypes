// Example 1
const personObj1 = {
    name: 'Alex',
    age: 30
};

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    }
    return person;
}
const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // { name: 'Alex', age: 25 }
// console.log(personObj2); // { name: 'John', age: 50 }

// Example 1

const obj = {
    innerObj: {
        x: 9
    }
};
const z = obj.innerObj;
z.x = 25;
//console.log(obj.innerObj.x)

// Example 2
(function example2() {
    var node = { val: 10, next: { nam: 20 } };

    var tail = node;
    console.log(`Before loop`);
    console.log(node);
    console.log(tail);

    for (let i = 0; i < 3; i++) {

        node.next = { nam: i };

        node = { val: i, next: { nam: i = i + 1 } };
    }

    console.log(`After loop`);
    console.log(node);
    console.log(tail);
})();
