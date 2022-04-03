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

//Question no.3 & 11
//Operators, operand & Expression in JS
//   5+20 //expression
// 5 & 20 is operand
// + is operator
//1. Assignment operator
//= is the aasignment operator

//2. Arithmatic operator
//+, -, *, /, %
// let a=50;
// let b=12;
// console.log(a+b, a-b, a*b, a/b);

// //Modulo operator %(result the remainder)
// console.log(a%b);

//3. Comparision operator
//(==, <, >, <=, >=)
// let a="Aman";
// let b="Chauhan";
// let c=22;
// console.log(c==22); //true
// if(a>b)//if(a==b)
// {
//     console.log("true");
// }else
// {
//     console.log("Not");
//}

//4. Logical Operator
//AND(&&) conjuction
//OR(||) Disjuction
//NOT(!)
// let a="Aman";
// let b="Chauhan";
// //let c=22;

// console.log(a&&b&&c);

// const a = true, b = false;
// const c = 4;

// // logical AND
// console.log(a && a); // true
// console.log(a && b);  // false

// console.log((c > 2) && (c < 2)); // false

//OR operator

// const a = true, b = false, c = 4;
// console.log(a || b); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true

// //NOT operator
// const a = true, b = false;
// console.log(!a); // false
// console.log(!b); // true

//Question 4. Function in JS
/* --A JavaScript function is a block of code designed to perform a particular task.

    A JavaScript function is executed when "something" invokes it (calls it).
    A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

    Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)
*/
// function myFunction(p1, p2) {
//     return p1 * p2;   // The function returns the product of p1 and p2
//   }
//   myFunction(2, 3); //call
  //console.log(myFunction);


  //Question No.5  Loop in JavaScript
  //For loop
  //While loop
  //Do while loop

  //For loop
//   for(let i=1;i<=10;i++){
//       console.log(i);
//   }

  //While loop
// let i=0;
//   while(i<=10)
// {
//     console.log(i);
//     i++;
// }

//do while loop
// let i=0;
  
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

//Question No.6
//Array in JavaScript
//An array is a special variable, which can hold more than one value.
//If you have a list of items (a list of car names, for example), storing the cars in single variables.
//Using an array literal is the easiest way to create a JavaScript Array.

// const array_name = [item1, item2, item3, etc]; 

//Spaces and line breaks are not important. A declaration can span multiple lines:
// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
//   ];

//   console.log(cars);  //[ 'Saab', 'Volvo', 'BMW' ]
