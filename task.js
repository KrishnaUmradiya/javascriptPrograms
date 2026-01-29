let student = {
    name : "   first name   ",
    email : "USER@GMAIL.COM",
    course : "JavaScript,React,Node",
    marks : [45,78,60,90,33],
    hobbies : ["Music","Cricket","Reading"],
    address : ["India",["GUjarat","Ahmedabad"]]
};
//------string operations-------
//remove space and convert it to uppercase 
student.name = student.name.trim().toUpperCase() 

// //email to lowercase
student.email = student.email.toLowerCase()

// //include
let includeText = student.course.includes("React")
 console.log("check if react is in course ?",includeText);

 // //find index
console.log("index of node is :",student.course.indexOf("Node"));

// //replace
student.course = student.course.replace("JavaScript","JS")

//split
console.log("after the split :",student.course.split(" "));

// //length
console.log("length of student's name :",student.name.length);

//--------array operations-------
//add
student.hobbies.push("Swimming")
console.log("add element (push) : ",student.hobbies);

//remove
student.hobbies.pop()
console.log("remove last element(pop) : ",student.hobbies);

//add first
student.hobbies.unshift("Drawing")
console.log("add element at beginning (unshift) : ",student.hobbies);

//remove first
student.hobbies.shift()
console.log("remove first element(shift) : ",student.hobbies);

//merge hobbies with course
let courseArr = student.course.split(",")
let mergedArr = [...student.hobbies,...courseArr]
console.log("after merge : ",mergedArr);

//includes
console.log("React exists in course array ? ",student.course.includes("React"));

//find index
console.log("Index of JS in course array : ",student.course.indexOf("JS"));

//first two mark
let sliceMark = student.marks.slice(0,2)
console.log("first two marks : ",sliceMark);

//failed 
let failed = student.marks.filter(m => m < 40)
let index = student.marks.indexOf(failed[0])
let result = student.marks.splice(index,1)
console.log("after remove the failed : ",student.marks);

//covert hobbies to string
let hobbiesStr = student.hobbies.join(", ")
console.log("after convert to string : ",hobbiesStr);

//-----array iteration method-----
//add 5 mark to each
student.marks = student.marks.map(m => m + 5)
console.log("add 5 mark to each : ",student.marks);

//get only pass mark
student.marks = student.marks.filter(m => m >= 40)
console.log("get only pass mark : ",student.marks);

//find the first mark above 80
let findFirst = student.marks.find(m => m > 80)
console.log("get first mark above 80 : ",findFirst);

//foreach to print hobbies
console.log("hobbies using foreach : ");
student.hobbies.forEach(h => console.log(h))

//sort the marks
console.log("after sorting the marks : ",student.marks.sort());

//reverse the mark order
console.log("after reverse the marks order : ",student.marks.reverse());

//flatten the address
console.log("address before the flat : ",student.address);
student.address = student.address.flat()

//add property 
let failedMark = student.marks.filter(m => m < 40)
student.result = failedMark.length === 0 ? "pass" : "fail"
console.log("reault : ",student.result);

console.log("final student object : ",student);
