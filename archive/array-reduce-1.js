const people = [
    { name: 'Diwan', Age: 35 },
    { name: 'Dimpi', Age: 30 },
    { name: 'Nimmi', Age: 20 },
    { name: 'Jitender', Age: 35 },
    { name: 'Raju', Age: 20 },
];

console.log(people.map(i => i.age))



const groupedAge = people.reduce((grouped, person) => {
    const age = person.Age;
    console.log(age);
    if (grouped[age] == null) {
        grouped[age] = [];
    }
    grouped[age].push(person.name);
    return grouped;

}, {});

console.log(JSON.stringify(groupedAge));