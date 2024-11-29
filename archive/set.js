'use strict';
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours1 = {
    [weekDays[3]]: {
        open: 12,
        close: 22
    },
    [weekDays[4]]: {
        open: 11,
        close: 23
    },
    [weekDays[5]]: {
        open: 0,
        close: 23
    }
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhansed object liternals
    openingHours: hours1,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery({ address, mainIndex, starterIndex, time }) {
        console.log(time);
        console.log(address);
        console.log(this.order(starterIndex, mainIndex))

    }
};

restaurant.orderDelivery({
    time: '22:15',
    address: 'MIG Super Sector 70, Mohali',
    mainIndex: 2,
    starterIndex: 2
});
const { name: hotelName, categories: tags, openingHours: hours } = restaurant;
//console.log(hotelName, tags, hours);
const { Fri: { open: o, close: c } } = hours;
console.log(o, c);

const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

let a = 11;
let b = 22;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k, l = 66]] = nested;
// console.log(i, j, k, l);

const users = [
    { name: "Jitender", age: 20 },
    { name: "Rajesh", age: 20 },
    { name: "Anil", age: 20 },
    { name: "Reena", age: 20 },
    { name: "Suman, age:20", age: 20 }
];