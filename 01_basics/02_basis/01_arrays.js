//array

//const myArr = [0,1,2,3,4,5,6,7,8,9]

//javascript array resizable 
console.log(myArr[ 2]);

// shallow copy  same refrence.
//deep copy do not share same refrence.

const myArr = [0,1,2,3,4,5,6] // Array(arrayLength)?
const myfruits = ["apple","banana","mango","grapes"]
const myArray2 = new Array(1,2,3,4,5,6,7,8,9)
console.log(myArr.length);
console.log(myfruits.length);
console.log(myArray2.length);

//Array mehods
//push() add element at the end of array 
//myArray.push(10)

//myArray.push(11)
console.log(myArray);
//pop() remove element from the end of array
//myArry.pop()

console.log(myArray);

//unshift() add element at the start of array
//myArray.unshift(0)

//shift() remove element from the start of array.
//myArray.shift()


console.log(myArray.includes(5)); //true
console.log(myArray.includes(10)); //false

//console.log(myArray.indexOf(5)); //5
console.log(myArray.indexOf(10)); //-1

//console.log(myArr);
//console.log(newArr);

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

//const myArray = [0,1,2,3,4,5,6,7,8,9]
//const newArr = myArray.slice(2,5)
//console.log(newArr); // [2,3,4]
//console.log(myArray); // [0,1,2,3,4,5,6,7,8,9]

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//const myArray = [0,1,2,3,4,5,6,7,8,9]
//const newArr = myArray.splice(2,5)
//console.log(newArr); // [2,3,4]
//console.log(myArray); // [0,1,7,8,9]


//difference between slice and splice is slice does not modify the original array but splice modifies the original array.
console.log("A",myArray);

//const myn1 = myArray.slice(1,3)
//console.log("B",myn1);
//console.log("b",myArray);

//const myn2 = myArray.splice(1,3)
//console.log("C",myArr);
//console.log(myn2);

//const marvel_heros = ["thor","ironman","spiderman","saktiman"]
//const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); //array as a data.
//console.log(marvel_heros[3][1]); // not good way .

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //add array 

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3[4,5,6],5[3,4,5,6]]

const real_another_array = another_array.flat(infinity)

console.log(real_another_array);


console.log(Array.isArray("Yatin"))
console.log(Array.from("Yatin"))
console.log(Array.from({name: "yatin"})) //intresting empty array








