let obj1 = {
    id: 100,
    "first name": "Sanjay",
}

console.log(obj1.id);
console.log(obj1["first name"]);

obj1.id = 500;
obj1["first name"] = "SSG";


console.log(obj1.id);
console.log(obj1["first name"]);


console.log(obj1);


let person = {
    id: 1,
    name: "GSS",
    place: "Bangalore",
    bool: true
}

console.log(person);

person.bool = undefined; //key still be there, its value will be assigned as undefined

console.log(person);

delete person.bool; //deletes entire property i.e. both key and value

console.log(person);

const person1 = {
    id: 2,
    name: "SSG",
    place: "Karwar",
    bool: true
}

console.log(person1);

person1.name = "SSG GSS"; // works --> object properties can be modified if an object declared as const however complete object itself can't be modified

delete person1.bool; // works

console.log(person1);

person1 = null; //Uncaught TypeError: Assignment to constant variable --> Uncaught TypeError: Assignment to constant variable --->  complete object itself can't be modified

console.log(person1);

