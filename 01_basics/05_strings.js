const name = "yatin sharma"
const repoCount = 10

//console.log(name + repoCount + "value"); // not good to write code .

console.log('hello my name is ${name} and my repo count is $ {repoCount}'); // good way to write code .

const gameName = new String("yatin")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);  //methood of string .
console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2)); //t print 
//console.log(gameName.indexOf(t)); // reverse.

//const anotherString = gameName.slice(-8,4)
console.log(newString);

//const anotherString = gameName.slice(-6,5)
console.log(anotherString);

//const newStringOne = " yatin Sharma " // space not consider.
console.log(newStringOne);
console.log(newStringOne.trim()); // use of trim command #explore trimstart / trimand more mdn refrence.

//const url = "https;//zmate.in/zmate%10Zmate"

console.log(url.replace('%20', '-')) //use of replace methood 

console.log(url.includes('sundar'))

console.log(gameName.split('_'))
