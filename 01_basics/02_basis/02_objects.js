//singleton 


// object literals

//const jsuser = {
   // name: "Hitesh",
   // "FullName" : "yatin sharma",
  //  mySym: "mykey",  //[mySum] use braces
   // age: 19,
   // location:"noida",
    //email: "yatin@200gmail.com",
  //  isLoggedIn: false,

//lastLoginDays: ["monday","saturday"]

//}

//console.log(jsuser.email)
//console.log(jsUser["email"]
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])


//jsUser.email = "yatin@gptgmail.com"
//object.freeze(jsUser)
//jsUser.email = "yatin@micrrosoft.com"
//console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user,${this.name}");
}

//console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


//const zmateuser = new Object()  //*const usefor declare 

console.log(zmateuser); // {} empty **singleton object .

//const zmateuser = {}  //non singleton object

//zmateuser.id = "123abc"
//zmateuser.name = isLoggedin = false 
//console.log output- {'id:123abc',isLoggedIn: false}
//console.log(zmateuser); 

const regularUser = {
    email: "yatin@2006gmail.com",
    FullName: {
        userfullname: {
            firstname: "yatinsharma",
            lastname: "sharma"

        }

    }

}

//console.log(regularUser.FullName.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3: "a",4:"b"}

//const obj3 = {obj1,obj2}
//const obj = Object.assign({},obj1, obj2) //{} combine value learn more mdn mozila refrence .

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//same like arry print .


const users = [
{ 
    id: 1,
    email:"yatin@gmail.com"
},
{
    id:1,
    email:"yatin@2006gmail.com"
},

]

users[1].email 
//console.log(zmateuser);

//console.log(object.keys(zmateusers));
//datatype array print.
//console.log(object.values(zmateusers));
//datatype values print.
//console.log(object.entries(zmateusers));
//datatype entries print.

//console.log(zmateuser.hasOwnProperty('isLoggedin'));
//methoods.
//isPrototypeof
//tostring
//definesetter.
//propertyisEmumerable.

const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "yatin sharma"
}
//course.courseInstructor 
const {courseInstructor: instructor} = course

//console.log(course.courseInstructor); //yatin sharma 
console.log(instructor); //yatin sharma

//****concept of api **** 
//{
//"name": "yatin",
//"email": "yatin@gmail.com"}
//}

//in the form of object we can use api data in the form of object and array both .

/*[
  //  {},
  //  {},
    {}
//]
basic about json */
















