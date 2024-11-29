const items = [
  { name: "Rice", price: 50 },
  { name: "Lentils", price: 80 },
  { name: "Wheat", price: 20 },
  { name: "Beans", price: 100 },
];

// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price;
// });

const totalPrice = items.reduce((total, item) => {
  console.log(`total: ${total}`);
  console.log(`price: ${item.price}`);
  return total + item.price;
}, 0);

console.log(totalPrice);
