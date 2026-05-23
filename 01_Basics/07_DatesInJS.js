let myDate = new Date;
console.log(myDate.toString());
console.log(myDate.toDateString()); // Day-Month-Year
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); // Month-Date-Year
console.log(myDate.toLocaleString()); // Month-Date-Year and Time
console.log(myDate.toLocaleTimeString()); // Only Time

console.log(typeof myDate);
let myCreatedDate = new Date(2026,4,22)
console.log(myCreatedDate.toLocaleString());
let  myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`The Month is ${newDate.getDay()}`);

newDate.toLocaleString('default',{
    weekday: "long"
})


console.log(newDate.toLocaleString())