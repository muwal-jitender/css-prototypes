const users = [
    { firstName: 'JK', lastName: 'Muwal', age: 40 },
    { firstName: 'Sonu', lastName: 'Bughalia', age: 29 },
    { firstName: 'Rohit', lastName: 'Kumar', age: 33 },
    { firstName: 'Sahil', lastName: 'Oberoi', age: 31 },
    { firstName: 'Sonu', lastName: 'Muwal', age: 29 }
];
function getUser(user) {
    if (user.age < 32) {
        return user.firstName;
    }
}
// const usersAgeLessThan30 = users.filter(getUser);
// const usersAgeLessThan30 = users.filter(x => (x.age < 32)).map(x=>x.firstName);


const usersAgeLessThan30 = users.reduce((acc, curr) => {
    if (curr.age < 32) {
        acc.push(curr.firstName)
    }
    return acc;
}, []);

console.log(usersAgeLessThan30);
const findAgeGroup = users.reduce((ageGroup, curr) => {

    if (ageGroup[curr.age]) {
        ageGroup[curr.age] = ++ageGroup[curr.age];
    }
    else {
        ageGroup[curr.age] = 1;
    }
    return ageGroup;
}, {});

console.log(findAgeGroup);