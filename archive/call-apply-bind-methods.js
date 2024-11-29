let name = {
    firstName: "Jitender",
    lastName: "Muwal",

}
let fullName = function (hometown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}
let cityState = ['Hisar', 'Haryana'];
fullName.apply(name, ['Hisar', 'Haryana']);
let name2 = {
    firstName: "Amit",
    lastName: "Bugalia"
}

fullName.apply(name2, ["Hansi", 'Punjab'] );

let myFullName = fullName.bind(name2, "Moga","Punjab");

myFullName();