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
const person1 = {
    name : "Krishna",
    age : 19,
    address : {
        city : "keshod",
        zipcode : "362220",
        street : "123 main st."
    }
}
console.log(person1?.address?.city);//? is prevent the error in browser
//console.log(Object.keys(person1));
//console.log(Object.values(person1));
console.log(Object.entries(person1));

