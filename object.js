//object is collection any type of data
// const person = {
//     name : "Krishna",
//     age : 20,
//     hobbies : ['badminton','reading'],
//     greet : function(){
//         console.log("hello");
        
//     }
// }
// //access value from object
// console.log(person.name);
// console.log(person['age']);

// //adding or modifying the data of object
// person.job = "React Developer"
// person.salary = 50000
// console.log(person);

// delete person.salary
// console.log(person);

//nested object
// const person1 = {
//     name : "Krishna",
//     age : 19,
//     address : {
//         city : "keshod",
//         zipcode : "362220",
//         street : "123 main st."
//     }
// }
// console.log(person1?.address?.city);//? is prevent the error in browser
// //console.log(Object.keys(person1));
// //console.log(Object.values(person1));
// console.log(Object.entries(person1));
//destructuring object 
// const user = {
//     name : "user",
//     role : "Admin",
//     designation : "Developer",
//     age : 20,
//      address : {
//         city : "keshod",
//         zipcode : "362220",
//         street : "123 main st."
//     }
// }
//const {name,age,role} = user
//console.log(name,age,role);
//rename object property 
// const{name : profileName} = user
// console.log(profileName);

//add property in object with defalut value
// const {name,age,role,state = "Gujarat"} = user
// console.log(name,age,role,state);

//spread operator
// const array = [1,2,3]
// const moreElement = [...array,4,5,6]
// console.log(moreElement);

//copied array
// const originalArray = [1,2,3]
// const copiedArray = [...originalArray]
// console.log(copiedArray);

//merge array
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const mergedArray = [...arr1,...arr2]
// console.log(mergedArray);

//spread operator in object
// const user1 = {
//     name : "krishna",
//     city : "keshod"
// }
// console.log(user1);

// const newObj = {
//     ...user1,
//     role : "React developer"
// }
// console.log(newObj);

//copy object 
// const user2 = {
//     name :"user2"
// }
// const user3 = {
//     ...user2
// }
// console.log(user3);

//merge object
const obj1 = {
    name : "obj1",
    age : 30
}
const obj2 = {
    age : 20
}
const obj3 = {...obj1,...obj2}
console.log(obj3);

