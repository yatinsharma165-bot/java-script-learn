//singleton 


// object literals

const jsuser = {
    name: "Hitesh",
    "FullName" : "yatin sharma",
    mySym: "mykey",  //[mySum] use braces
    age: 19,
    location:"noida",
    email: "yatin@200gmail.com",
    isLoggedIn: false,

lastLoginDays: ["monday","saturday"]

}

//console.log(jsuser.email)
//console.log(jsUser["email"]
console.log(jsUser["full name"])
console.log(jsUser[mySym])


jsUser.email = "yatin@gptgmail.com"
//object.freeze(jsUser)
jsUser.email = "yatin@micrrosoft.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user,${this.name}");
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




