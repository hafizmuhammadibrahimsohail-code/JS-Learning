const name = "Ibrahim "
const no = 50

// console.log(name + no + " Value")

// console.log(`My name is ${name} and I have ${no} rupees in my pocket.`);

const myString = new String('Ibrahim');

// console.log(myString[1]);
// console.log(myString.length);
// console.log(myString.toLowerCase());
// console.log(myString.charAt(3));
// console.log(myString.indexOf('m')); 

const newStr = myString.substring(4,7) // him answer
// console.log(newStr);

const anotherString = "    Ibrahim    "
// console.log(anotherString);  
// console.log(anotherString.trim());   // trim reduces space

const url = 'https://ibrahim.com/ibbi%20choudhary'
console.log(url.replace('%20','-'));
console.log(url.includes('ibrahim'))
