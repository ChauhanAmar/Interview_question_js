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

//Array methods in JavaScript
//Traversal of an Array
// var newArr=['amar','kumar','singh'];
// //console.log(newArr[1]);
// //length of element
// //console.log(newArr.length);
// //for last element
// //console.log(newArr.length-1);

// //use for loop to nagivate
// for(var i=0;i<newArr;i++){
// console.log(newArr[i]);
//}

//Methods in array
//push(),pop(),shift(),unshift()

//push()     //add last one
// const myArr=['A','B','C','D'];
// //console.log(myArr);
// const newMyArr=myArr.push('E');    //[ 'A', 'B', 'C', 'D', 'E' ]
// console.log(myArr);

//pop()    //remove last one
// const myArr=['A','B','C','D'];
// //console.log(myArr);
// const newMyArr=myArr.pop('E');        //[ 'A', 'B', 'C' ]
// console.log(myArr);

//unshift()      //add first one
// const myArr=['A','B','C','D'];
// //console.log(myArr);
// const newMyArr=myArr.unshift('E');     //[ 'E', 'A', 'B', 'C', 'D' ]
// console.log(myArr);

//shift()       //remove first one
// const myArr=['A','B','C','D'];
// //console.log(myArr);
// const newMyArr=myArr.shift('E');     //[ 'B', 'C', 'D' ]
// console.log(myArr);


//slice(start index, delete, add) array method in js
// const myArr=['A','B','C','D'];
// //console.log(myArr);
// const newMyArr=myArr.splice(0,1,'F');     //[ 'F', 'B', 'C', 'D' ]
// console.log(myArr);

//indexOf method (always return -1)    //use for update element
// const myArr=['A','B','C','D'];
// const indexOfArr=myArr.indexOf('B');
// if(indexOfArr !=-1){
// const updateArr=myArr.splice(indexOfArr,1,'BB');      //[ 'A', 'BB', 'C', 'D' ]
// console.log(myArr);
// }else{
//   console.log("No data found");
// }

//imp Array methods 
//map(),reduce(),filter()

//map() returns a new array containing the result of calling the function on every element in this array.
// const array=[1,4,9,16,25];
// let newArr=array.map((curElm, index,arr)=>{
//   return curElm>9;
// })
// console.log(array);     //[ 1, 4, 9, 16, 25 ]
// console.log(newArr);    //[ false, false, false, true, true ]
//exp-2
// const array=[1,4,9,16,25];
// let newArr=array.map((curElm, index,arr)=>{
//   return `Index number= ${index} and the value is ${curElm} belong to ${arr}`;
// })
// //console.log(array);  
// console.log(newArr);
//output
// [
//   'Index number= 0 and the value is 1 belong to 1,4,9,16,25',
//   'Index number= 1 and the value is 4 belong to 1,4,9,16,25',
//   'Index number= 2 and the value is 9 belong to 1,4,9,16,25',
//   'Index number= 3 and the value is 16 belong to 1,4,9,16,25',
//   'Index number= 4 and the value is 25 belong to 1,4,9,16,25'
// ]

// // find the root by map()
// const arr=[1,4,9,16,25];
// let newArr=arr.map((curElm)=>{
//   return Math.sqrt(curElm);
// })
// console.log(newArr);       //[ 1, 2, 3, 4, 5 ]

//Filter()
// const arr=[1,4,9,16,25];
// let newArr=arr.map((curElm)=>{
//   return curElm*2;
// }).filter((curElm)=>{
//   return curElm>9;
// })
// console.log(newArr);        //[ 18, 32, 50 ]

//Reduce() method   //Not use in ES2020
/*   -- The Reduce() method executes a reducer function (that you provide) on each element of array, 
resulting in single output value.

The reducer function takes four arguments:
1. Accumulator
2. Current value
3. Current index
4. Source Array
*/

// let arr=[5,6,3];
// let sum=arr.reduce((accumulator, curElm, index,arr)=>{
//   // return accumulator=curElm;       //3
//   // return accumulator +=curElm;        //14 
//   //return accumulator *=curElm;       //-4
//   return accumulator *=curElm;      //90
// },7)    //if add any previous number
// console.log(sum);   


//How to flatten an Array
// //Converting 2D and 3D array to 1D array...
// const arr=[
//   ['zone1','zone2'],
//   ['zone3','zone4'],
//   ['zone5','zone6']
// ];
// let flatArr=arr.reduce((accumulator, curValue)=>{
//   return accumulator.concat(curValue);
// })
// console.log(flatArr);    


//  Question 7  

//String in Java Script
// A JavaScript string is zero or more charactor written insides quotes. 
// JavaScript strings are used for storing and manuplating text.
// You can use single or double quotes.
// String can be created as primitives , from string literals, or as objects , using the String() constructor.

// //String.prototype.length
// let myName="Amar Chauhan";
// console.log(myName.length);    //12

// //1. Escape character
// let mySen="my name is \"amar\" chauhan";  //if use qoutes
// let mySen1='my name is \'amar\' chauhan';
// let mySen2='my name is "amar" chauhan';
// let mySen3="my name is 'amar' chauhan";
// console.log(mySen,mySen1,mySen2,mySen3);

//2. Finding a string in a string
//String.prototype.indexOf(Search Value[,fromIndex])
//The indexOf() method return the index of a specified text in a string.
//case sensitive and return -1

// const myData='I am Amar Chauhan';
// console.log(myData.indexOf('Amar'));   //5

//String.prototype.lastIndexOf(search value[,fromIndex])
/* -- Return the index within the calling string object of the last occurence of search value,
or return -1 if not found data */
// const myData='I am Amar Chauhan';
// console.log(myData.lastIndexOf('Amar',8));    //5


//Searching for string in string
//String.prototype.search(regexp)
/* The search() method searches a string for a specified value and return the position of the match.*/ 
//The search() method cannot take second start position argument.

// const myData="I am Amar Chauhan";
// let newData=myData.search("Chauhan");      
// console.log(newData);                          //10

//Extracting string parts:
//There are three methods for extracting a part--

// 1. Slice(start,end)
// 2. Substring(start,end)
// 3. substr(start,length)

//1. slice() extracts a part of a string and returns the extracted part in a new string.
// const str="Apple Banana Kiwi";
// let res=str.slice(0,5);
// console.log(res);                 //Apple

// const str="Apple Banana Kiwi";
// let res=str.slice(6,-2);
// console.log(res);               //Banana ki

//2. substring(start,end)
//Similar to slice(),
//substring can't support negative  index.
// const str="Apple Banana Kiwi";
// let res=str.substring(0,5);
// console.log(res);              //Apple


//3. The substr() methods
//Similar to slice(),
//The difference is that the second parameter specifies the length of the extracted part.
//(for back side data print)

// const str="Apple Banana Kiwi";
// //let res=str.substr(4);             //e Banana Kiwi
// let res=str.substr(-4);              //Kiwi
// console.log(res); 


// Replacing() String Content
//String.prototype.replace(searchFor, replaceWith)
// The replace() method replaces a specified value with another value in a string.

//Points to remember
//The replace() method does not chance the string,
//It is called on, It returns a new string.
//By default, the replace() method replace only the first match.
//casesensitive
// let myData="I am amar Chauhan";
// let replaceData=myData.replace("amar","Amar");
// console.log(replaceData);                     // I am Amar Chauhan



//Extracting String Characters
//There are three methods 
//1. charAt(position)
//2. charCodeAt(position)
//3. property access[]

//1. charAt() method
//The charAt() method returns the character at a specified index (position) in a string.

// let str="Amar Chauhan";
// let newStr=str.charAt(5);
// console.log(newStr);               //C

//2. charCodeAt() method
//The charCodeAt() method return the unicode of the character at a specified index in string.
//The method returns a UTF-16 code
//(integer between 0 and 65535)
// let str="AMAR CHAUHAN";
// let newStr=str.charCodeAt(0);
// console.log(newStr);              //65

//or
// let str="AMAR CHAUHAN";
// let lastChar=str.length-1;
// let newStr=str.charCodeAt(lastChar);
// console.log(newStr);                          //78

//3. Property Access
//ECMAScript 5 (2009) allows property access[] on string

// let str="Amar Chauhan";
// console.log(str[1]);                      //m


//Some other usefull methods.......
//1. toUpperCase()
//2. toLowerCase()
//3. concat()
//4. trim()

// let str="Amar Chauhan";
// console.log(str.toUpperCase());    //AMAR CHAUHAN
// console.log(str.toLowerCase());    //amar chauhan

// let str1="Amar";
// let str2="Chauhan";
// console.log(str1 +" " +str2);      //Amar Chauhan
// console.log(str1.concat(str2));      //AmarChauhan
// console.log(str1.concat(" ",str2));    //Amar Chauhan
// console.log(`${str1} ${str2}`);         //Amar Chauhan


//String.trim()
//delete extra spaces
// let str="       Amar Chauhan    ";
// let newStr=str.trim();
// console.log(newStr);            //Amar Chauhan

//Converting string to Array

//A string can be converted to an array with split() method:

// let txt="a,b,c,d,e";
// console.log(txt);
// console.log(txt.split(",")); // by comma
// console.log(txt.split(" "));  //by space
// console.log(txt.split("|"));   //by pipe



//DATE and TIME in JavaScript
//Date method(get and set)
//Time method(get and set)


//1. Date method(get and set)
// //new Date()
// let currDate=new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString);
// console.log(new Date().toString);

//7 number specified(year,month,day,hour,minute,second, millisecond in that order)//  minimum two argument
// let d=new Date(2022,0,5,10,33,30,50);
// console.log(d.toLocaleString());    //5/1/2022, 10:33:30 am
// //datestring
// let e=new Date("October 13,2022 11:20:30");
// console.log(e.toLocaleString());
// //milliseconds
// let f=new Date(1609574531453);
// console.log(f.toLocaleString());


//Date.now()     //show in millisecond
// console.log(Date.now());         //1649414435490



//Date get and set methods

// //get()
// let currDate=new Date();
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDay());
// console.log(currDate.getDate());

//set()      //show in millisecond
// let currDate=new Date();
// console.log(currDate.setDate(8));


//2. Time Method
//get()

// let currTime=new Date();
// console.log(currTime.getTime());    //millisecond
// console.log(currTime.getHours());    //hours
// console.log(currTime.getMinutes());  //minutes
// console.log(currTime.getSeconds());  //second
// console.log(currTime.getMilliseconds());    millisecond 

//set()

// let currTime=new Date();
// console.log(currTime.setTime(15));    // all show in millisecond
// console.log(currTime.setHours(10));    
// console.log(currTime.setMinutes(45));  
// console.log(currTime.setSeconds(45));  
// console.log(currTime.setMilliseconds(10));



//Math object in JavaScript
//use for mathmatic task
//Properties
// 1. Math.PI
// 2. Math.round()
// 3. Math.pow()
// 4. Math.sqrt()
// 5. Math.abs()
// 6. Math.ceil()
// 7. Math.floor()
// 8. Math.min()
// 9. Math.max()
// 10. Math.random()
// 11. Math.trunc()

// //1. MAth.PI
// console.log(Math.PI);   //3.1415

// //2. Math.round()
// let a=4.3;
// console.log(Math.round(a));     //4

// //3. Math.pow()
// console.log(Math.pow(2,3));    //2**3=8

// //4. Math.sqrt()
// console.log(Math.sqrt(25));    //5

// //5. Math.abs()  //negative to positive
// console.log(Math.abs(-5));    //5

// //6. Math.ceil()    //round the complete number //maximum
// console.log(Math.ceil(56.1));    //57

// //7. Math.floor()  // oposite ceil consoder minimum
// console.log(Math.floor(56.8));    //56

// //8. Math.min()
// console.log(Math.min(12,155,200,89));   //12

// //9. Math.max()
// console.log(Math.max(12,155,200,89));   //200

// //10. Math.random()
// console.log(Math.round(Math.random()*10));   //random number 2,4,0,8,... 

// //11. Math.trunc()
// console.log(Math.trunc(4.8));    //4   if positive then work as Math.floor()
// console.log(Math.trunc(-5.2));   //5    if negative the work as Math.ceil()








//Use twillio


const arr=[{
    fname:"Amar",
    lname:"Chauhan",
    phone:8416628452
},
{
    fname:"Abhinay",
    lname:"Kumar",
    phone:8416628452
},
{
    fname:"Hemant",
    lname:"Singh",
    phone:8416628452
}];
const myNumber=8416828100;


// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

      for(let i=0;i<arr.length;i++){
        client.messages
        .create({body: 'Hi there', from: myNumber, to:arr[i].phone})
        .then(message => console.log(message.sid));
  
        console.log(arr[i].phone);
    }
