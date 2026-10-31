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









