var names = ["Andrew", "Angie", "Bob"];
//
// names.forEach(function (name){
//   console.log("forEach", name);
// });
//
// names.forEach((name) => {
//   console.log("Arrow function", name)
// });
//
// names.forEach((name) => console.log(name));



// var returnME = function(name) {
//   console.log(name + "!");
// }
// returnME("Vishal");


// var returnME = (name) => name + "!";
// console.log(returnME("Vishal"));
//
//
//
// var person = {
//   name: "Vishal",
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + " says hi to " + name);
//     });
//   }
// };
//
// person.greet();

// CHALLENGE!!
// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1, 3));
// console.log(add(9, 0));

// var returnSum = (a, b) => {
//   return "Sum is = " + (a + b);
// }



var returnSum = (a, b) => (a + b);

console.log(returnSum(1, 3));
console.log(returnSum(9, 0));
