//date object represent a single moment in time a platform 
//independent format .

// calculate mili  seconds //use api old

// now temporal.now.instant get the current time.
//temporal.now.time.zone()- get the current date and wall clock. and more learn from mdn 

let myDate = new Date()
//console.log(myDate); //output .900Z not readable .

//console.log(myDate.toString()); //
//console.log(myDate.toDateString())
//console.log(myDate.toTimeString()) // and more explore
//imp date is a *object* 

let mycreatedDate = new Date (2026,0,26)
//console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamps = Date.now()
console.log(myDateStamp);
console.log(mycreatedDate.getTime()); //dates booking real world example air bnb ticked book my show .
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.gatmonth() + 1);
console.log(newDate.getDay());

//${newDate.getDate()} and the time '

newDate.toLocalleString('default',{
    weekday: "long"
})




