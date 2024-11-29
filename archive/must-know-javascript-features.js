
/* const a = 3;

// const main = () => {
//     const a = 2;
//     console.log(`In main scope: ${a}`);
// }

// {
//     const a = 3;
//     console.log(`In another scope: ${a}`);
// }
// main();
// console.log(`In global scope: ${a}`);
// switch (a) {
//     case 1:
//         {
//             const result = a * 2;
//             console.log(result);
//             break
//         }
//     case 2:
//         {
//             const result = a + 2;
//             console.log(result);
//             break
//         }
//     case 3:
//         {
//             const result = a / 2;
//             console.log(result);
//             break;
//         }
 }*/

const person = {
    name: "Jitender",
    age: 35
}

if (person.name){
    console.log(`Has truthy name value`);
}

if("name" in person)
{
    console.log(`Has name property`);
}

