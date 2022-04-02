//Question No.1
//What is JavaScript?
/*JavaScript is a dynamic programming language that's used for web development, in web applications,
for game development, and lots more. 
It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.
The ECMAScript Edition 5 standard will be the first update to be released in over four years. 
JavaScript 2.0 conforms to Edition 5 of the ECMAScript standard, and the difference between the 
two is extremely minor.
Today, Netscape's JavaScript and Microsoft's JScript conform to the ECMAScript standard, 
although both the languages still support the features that are not a part of the standard.
*/


//Question No.2
//What is data type?
/* The set of types in the JavaScript language consists of primitive values and objects.
--Primitive values (immutable datum represented directly at the lowest level of the language).
Boolean type
Null type
Undefined type
Number type
BigInt type
String type
Symbol type
--Objects (collections of properties)
*/
//Boolean type
// var a=5;
// var b=10;
// console.log(b>a);

// //Null type
// var a=null;
// console.log(a);

// //undefined type
// var x;
// console.log(x);

//Number type
// var a=5;
// var b=10;
// var c = a+b;
// console.log(c);

// //BigInt type
// const x = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(x);

//String type
// var a = "This is Amar Chauhan";
// console.log(a);

//Symbol type
// let Sym1 = Symbol("Sym")
// let Sym2 = Symbol("Sym")

// console.log(Sym1 === Sym2) // returns "false"
// // Symbols are guaranteed to be unique.
// // Even if we create many symbols with the same description,
// // they are different values.


//Objects
//In computer science, an object is a value in memory which is possibly referenced by an identifier.
/* Properties-----
In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, 
a limited set of properties are initialized; then properties can be added and removed. Property values 
can be values of any type, including other objects, which enables building complex data structures. 
Properties are identified using key values. A key value is either a String value or a Symbol value.
*/

// const person = {
//     firstName: "Amar",
//     lastName: "Chauhan",
//     age: 22,
//     eyeColor: "black"
//   };
//   console.log(person);