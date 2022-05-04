//  Array destructuring

let list=["Honda","BMW","Audi"];
console.log(list);
// let [car1,car2,car3]=list;
// console.log(car2);
let [car1,,car2]=list;
console.log(car2);
// object destructuring

const person={
    name:"Rahul Kumar",
    age:34
}
console.log(person.age);

// let {name,age}=person;
// console.log(age);

let {age}=person;
console.log(age);