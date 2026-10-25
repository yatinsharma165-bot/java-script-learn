// primitive data types 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.
const score = 100; // number .
const isLoggedIn = false; // boolean .
const userEmail = null; // null .
let userAge; // undefined .
const id = Symbol('id'); // symbol .
const anothrId = Symbol('id'); // symbol 

const bigNumber = 123456789012345678901234567890n; // big int .


// refrence (non primitive )

// Array, Object, Function.

const fruit = ['orange', 'banana', 'apple']; // array ."]
let myobj = {
    name: "yatin",
    age: 22,
    
}

const myFunction = function() {
    console.log("hello world"); // function implementation
    // function implementation
}
 console.log(typeof bigNumber); // function print //undefined

 console.log(typeof outsideTemp); // function print //undefined
console.log(typeof myFunction); // function print //function**

//https//262.ecma-international.org/5.1/#sec-11.9.3



//***********************************/

// stack memory => primitive data types store in stack memory and refrence data types store in heap memory.


// heap memory => refrence data types store in heap memory and refrence data types store in stack memory.
let myname = "yatin"; // stack memory
let anotherName = myname; // stack memory.
anotherName = "yatin"; // stack memory

console.log(anotherName); // yatin print
console.log(myname); // yatin print

let userone = {
    email: "yatin@example.com",
    age: 22,
}

let usertwo = userone; // refrence memory
usertwo.email = "usertwo@example.com"; // modifies both userone and usertwo since they reference the same object in heap memory.

console.log(userone.email); // usertwo@example.com
console.log(usertwo.email); // usertwo@example.com