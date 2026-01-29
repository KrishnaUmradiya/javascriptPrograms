//string methods
//length()
//trim() ltrim and rtrime
//toUpperCase()
//toLowerCase()
//includes()
//indexOf()
//slice() minus value allow
//substring()  minus value not allow
//replace()
//concat()
//split()  string to array convert in result 
let string = " Hello JavaScript World ";
console.log(string);
console.log(string.length);

let trimText = string.trim();
console.log("trimtext : ",trimText.length);

console.log("toUpperCase : ",string.toUpperCase());
console.log("toLowerCase : ",string.toLowerCase());
console.log("includes : ",string.includes("JavaScript"));
console.log("indexOf : ",string.indexOf("JavaScript"));
console.log("slice : ",string.slice(2,7));
console.log("substring : ",string.substring(2,9));
console.log("replace : ",string.replace("JavaScript","Krishna"));
let extraText = " - Hello JS";
console.log("concat : ",string.concat(extraText));
console.log("split : ",string.split(" "));
