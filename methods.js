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
// let string = " Hello JavaScript World ";
// console.log(string);
// console.log(string.length);

// let trimText = string.trim();
// console.log("trimtext : ",trimText.length);

// console.log("toUpperCase : ",string.toUpperCase());
// console.log("toLowerCase : ",string.toLowerCase());
// console.log("includes : ",string.includes("JavaScript"));
// console.log("indexOf : ",string.indexOf("JavaScript"));
// console.log("slice : ",string.slice(2,7));
// console.log("substring : ",string.substring(2,9));
// console.log("replace : ",string.replace("JavaScript","Krishna"));
// let extraText = " - Hello JS";
// console.log("concat : ",string.concat(extraText));
// console.log("split : ",string.split(" "));

//array method
//length()
//push()add element in last
//pop()remove element in last 
//unshift()add element in first 
//shift()remove element in first
//concat() mixed two array and return new array
//includes()
//indexOf()
//splice()
//slice()
//join()
//delete()delete array but also take space in array
//map() using like for loop
//filter() using like for loop with condition
//find()
//froEach()
//sort()
//reverse()
//flat() nested array to flat array
// let arr = ['one','two','three','four']
// console.log("defalut array : ",arr);
// console.log("length : ",arr.length);
// //console.log("push : ",arr.push("five"));
// arr.push("five")
// console.log("array after push : ",arr);
// arr.pop()
// console.log("array after pop : ",arr);
// arr.unshift("first element")
// console.log("array after unshift : ",arr);
// arr.shift()
// console.log("array after shift : ",arr);
// let newArr = ["str 1","str 2"];
// let mixedArr = arr.concat(newArr);
// console.log("defalut array after concat : ",arr);
// console.log("array after concat: ",mixedArr);
// console.log("include : ",arr.includes("three"));
// console.log("indexOf : ",arr.indexOf("one"));
// console.log("slice : ",arr.slice(2,4));
// //console.log("splice : ",arr.splice(2,4));
// console.log("old array : ",arr);
// console.log("join : ",arr.join(", "));
// delete arr[3]
// console.log(arr);
// console.log("array iteration method : ");
// let numbers = [1,2,3,4,5]
// console.log("map : ",numbers.map(num => num*2));
// console.log("after map old array : ",numbers);
// console.log("filter : ",numbers.filter(num => num >2));
// console.log("after filter old array : ",numbers);
// console.log("forEach : ");
// numbers.forEach(num => console.log(num))
let num = [3,5,2,1,4]
console.log("sort : ",num.sort());
console.log("reverse : ",num.reverse());

let nestedArr = [1,2,[3,4],[5,6]]
console.log("defalut nested array : ",nestedArr);
let flatArr = nestedArr.flat()
console.log("flat array : ",flatArr);
