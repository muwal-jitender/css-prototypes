class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return `I have a ${this.brand}`;
  }
}

class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }
  show() {
    return `${this.present()} ${this.model}`;
  }

  hello = (param) => "Hello " + param;
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.hello("world"));

const vehicles = ["mustang", "f-150", "expedition"];

// old way

const [car, truck, vehicle] = vehicles;

console.log(car);
console.log(truck);
console.log(vehicle);

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);
